import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioElementComponent } from './audio-element.component';

const routes: Routes = [{ path: '', component: AudioElementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioElementRoutingModule { }
