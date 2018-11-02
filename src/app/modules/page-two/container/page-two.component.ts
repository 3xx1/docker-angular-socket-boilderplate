import { Component } from '@angular/core';

// State
import { Store } from '@ngrx/store';

// Actions
import * as PageTwoActions from '../actions/page-two.actions';

// Services
import { SocketClientService } from '../../../services/socket-client.service';

@Component({
  selector: 'page-two-container',
  templateUrl: './page-two.component.html',
  styleUrls: [ './page-two.component.scss' ],
  providers: []
})

export class PageTwoContainer {

  public dataPageOne: any;
  public dataPageTwo: any;

  public valuePageOne: number;
  public valuePageTwo: number;

  constructor(
    private store: Store<any>,
    private socketClientService: SocketClientService
  ) {
    this.dataPageTwo = this.store.select('PageTwoState');
    this.dataPageTwo.subscribe(data => {
      this.valuePageTwo = data.pageTwo.value;
    });
  }

  sliderValueChange($event: any) {
    this.store.dispatch( new PageTwoActions.UpdateValue( $event ) );
  }
}
