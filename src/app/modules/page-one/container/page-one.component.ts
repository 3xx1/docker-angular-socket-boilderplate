import { Component } from '@angular/core';

// State
import { Store } from '@ngrx/store';

// Actions
import * as PageOneActions from '../actions/page-one.actions';

// Services
import { SocketClientService } from '../../../services/socket-client.service';

@Component({
  selector: 'page-one-container',
  templateUrl: './page-one.component.html',
  styleUrls: [ './page-one.component.scss' ],
  providers: []
})

export class PageOneContainer {

  public dataPageOne: any;
  public dataPageTwo: any;

  public valuePageOne: number;
  public valuePageTwo: number;

  constructor(
    private store: Store<any>,
    private socketClientService: SocketClientService
  ) {
    this.dataPageOne = this.store.select('PageOneState');
    this.dataPageOne.subscribe(data => {
      this.valuePageOne = data.pageOne.value;
    });

    this.dataPageTwo = this.store.select('PageTwoState');
    this.dataPageTwo.subscribe(data => {
      this.valuePageTwo = data.pageTwo.value;
    });
  }

  increment() {
    this.socketClientService.globalActionDispatcher( new PageOneActions.Increment() );
  }

  decrement() {
    this.socketClientService.globalActionDispatcher( new PageOneActions.Decrement() );
  }
}
