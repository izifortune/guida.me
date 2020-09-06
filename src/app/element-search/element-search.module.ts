import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementSearchRoutingModule } from './element-search-routing.module';
import { ElementSearchComponent } from './element-search.component';


@NgModule({
  declarations: [ElementSearchComponent],
  imports: [
    CommonModule,
    ElementSearchRoutingModule
  ]
})
export class ElementSearchModule { }
