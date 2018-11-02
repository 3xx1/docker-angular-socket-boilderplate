import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

import { Store } from '@ngrx/store';

import * as io from 'socket.io-client';

@Injectable()
export class SocketClientService {
  // TODO: Change target url based on the environment param.
  public url;
  public socket;

  constructor(
    private store: Store<any>,
    private router: Router
  ) {
    const self = this;

    if (!environment.production) {
      // Use the page this was loaded from + configured port number.
      self.url = `http://${window.document.location.hostname}:${environment.socket_target_port}/`;
    } else {
      self.url = environment.socket_target;
    }
    self.socket = io(self.url);

    // 'action.dispatch' event definition
    self.socket.on('action.dispatch', function (msg) {
      self.store.dispatch(msg.data);
    });

    // 'refresh' event definition
    self.socket.on('refresh', function () {
      document.location.reload(true);
    });
  }

  public globalActionDispatcher(action: any) {
    this.store.dispatch( action );
    this.dispatchRemoteAction( action );
  }

  // remote action dispatch
  public dispatchRemoteAction(data: any) {
    this.socket.emit('action.dispatch', { data });
  }

  // Reloading Page to Refresh
  public refreshPage() {
    this.socket.emit('refresh', true);
  }
}
