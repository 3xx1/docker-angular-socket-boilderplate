import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* States */
import { StoreModule } from '@ngrx/store';
import { reducers } from './page-one.reducer';

/* Modules */
import { SharedModule } from '../../shared/shared.module';

/* Container */
import { PageOneContainer } from './container/page-one.component';

/* Routes */
const routes: Routes = [
  {
    path: 'page-one', component: PageOneContainer
  }
];

const components = [
  PageOneContainer
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('PageOneState', reducers),
    SharedModule
  ],
  providers: [],
  declarations: components,
  exports: components
})

export class PageOneModule {}
