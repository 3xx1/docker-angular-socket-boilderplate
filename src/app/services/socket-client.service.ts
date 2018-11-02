import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

import { Store } from '@ngrx/store';

// Actions - Central
// import * as CentralActions from '../modules/central/actions/central.actions';
// import * as CentralMediaActions from '../modules/central/actions/central.media.actions';

// Actions - Cluster
// import * as ClusterActions from '../modules/cluster/actions/cluster.actions';
//
// // Actions - Mobile
// import * as MobileActions from '../modules/mobile/actions/mobile.actions';
//
// // Actions - Video
// import * as VideoActions from '../shared/video/actions/video.actions';

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

    // 'states.update' event definition
    self.socket.on('states.update', function (msg) {
      if (!msg.selector || !msg.data) {
        return;
      }

      switch (msg.selector) {
        // case 'CentralState':
        //   if (self.router.url !== '/central') {
        //     self.store.dispatch(new CentralActions.StateUpdateAll(msg.data.central));
        //     self.store.dispatch(new CentralMediaActions.StateUpdateAll(msg.data.media));
        //   }
        //   break;
        // case 'VideoState':
        //   if (self.router.url !== '/wheel') {
        //     self.store.dispatch(new VideoActions.ChangeScene(msg.data.scene));
        //   }
        //   break;
        // case 'ClusterState':
        //   if (self.router.url !== '/cluster') {
        //     self.store.dispatch(new ClusterActions.StateUpdateAll(msg.data.cluster));
        //   }
        //   break;
        // case 'MobileState':
        //   if (self.router.url !== '/mobile') {
        //     self.store.dispatch(new MobileActions.StateUpdateAll(msg.data.mobile));
        //   }
      }
    });

    // 'action.dispatch' event definition
    self.socket.on('action.dispatch', function (msg) {
      self.store.dispatch(msg.data);
    });

    // 'refresh' event definition
    self.socket.on('refresh', function () {
      document.location.reload(true);
    });
  }

  // Reloading Page to Refresh
  public refreshPage() {
    this.socket.emit('refresh', true);
  }

  // remote action dispatch
  public dispatchRemoteAction(data: any) {
    this.socket.emit('action.dispatch', { data });
  }

  // update states
  public updateState(selector: string, data: any) {
    this.socket.emit('states.update', { selector, data });
  }
}
