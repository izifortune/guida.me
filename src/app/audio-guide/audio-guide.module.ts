import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioGuideRoutingModule } from './audio-guide-routing.module';
import { AudioGuideComponent } from './audio-guide.component';


@NgModule({
  declarations: [AudioGuideComponent],
  imports: [
    CommonModule,
    AudioGuideRoutingModule
  ]
})
export class AudioGuideModule { }
