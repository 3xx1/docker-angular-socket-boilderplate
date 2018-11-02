// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* States */
import { StoreModule } from '@ngrx/store';

// Components
import { SampleSharedComponent } from './sample-shared-component/sample-shared-component.component';

// Directives

const componentsList = [
  SampleSharedComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: componentsList,
  providers: [],
  exports: componentsList
})

export class SharedModule {}
