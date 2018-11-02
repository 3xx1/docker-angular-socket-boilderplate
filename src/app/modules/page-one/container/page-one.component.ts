import { Component } from '@angular/core';

// State
import { Store } from '@ngrx/store';

// Actions
// import * as ClusterActions from '../actions/cluster.actions';

// Services
import { SocketClientService } from '../../../services/socket-client.service';

@Component({
  selector: 'page-one-container',
  templateUrl: './page-one.component.html',
  styleUrls: [ './page-one.component.scss' ],
  providers: []
})

export class PageOneContainer {

  constructor(
    private store: Store<any>,
    private socketClientService: SocketClientService
  ) {}

}
