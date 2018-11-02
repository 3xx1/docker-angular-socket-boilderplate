import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

// State
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { metaReducers, reducers } from './app.reducer';

// App Component
import { AppComponent } from './app.component';

// Modules
import { SharedModule } from './shared/shared.module';
import { PageOneModule } from './modules/page-one/page-one.module';
import { PageTwoModule } from './modules/page-two/page-two.module';

// Devtools/Debugging
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// Services
import { SocketClientService } from './services/socket-client.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { enableTracing: false }),
    StoreModule.forRoot(reducers, { metaReducers }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule,
    SharedModule,
    PageOneModule,
    PageTwoModule
  ],
  providers: [
    SocketClientService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
