import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioGuideComponent } from './audio-guide.component';

const routes: Routes = [
  { path: '', component: AudioGuideComponent },
  {
    path: '/:elem',
    loadChildren: () =>
      import('../audio-element/audio-element.module').then(
        (m) => m.AudioElementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioGuideRoutingModule {}
