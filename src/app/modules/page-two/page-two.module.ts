import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

/* States */
import { StoreModule } from '@ngrx/store';
import { reducers } from './page-two.reducer';

/* Modules */
import { SharedModule } from '../../shared/shared.module';

/* Container */
import { PageTwoContainer } from './container/page-two.component';

/* Components */
import { SliderComponent } from './components/slider/slider.component';

/* Routes */
const routes: Routes = [
  {
    path: 'page-two', component: PageTwoContainer
  }
];

const components = [
  // Container
  PageTwoContainer,

  // Components
  SliderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('PageTwoState', reducers),
    SharedModule
  ],
  providers: [],
  declarations: components,
  exports: components
})

export class PageTwoModule {}
