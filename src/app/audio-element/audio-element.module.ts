import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioElementRoutingModule } from './audio-element-routing.module';
import { AudioElementComponent } from './audio-element.component';


@NgModule({
  declarations: [AudioElementComponent],
  imports: [
    CommonModule,
    AudioElementRoutingModule
  ]
})
export class AudioElementModule { }
