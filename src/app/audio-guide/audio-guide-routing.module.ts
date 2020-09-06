import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioGuideComponent } from './audio-guide.component';

const routes: Routes = [
  { path: '', component: AudioGuideComponent },
  {
    path: 'search',
    loadChildren: () =>
      import('../element-search/element-search.module').then(
        (m) => m.ElementSearchModule
      ),
  },
  {
    path: 'element/:elem',
    loadChildren: () =>
      import('../audio-element/audio-element.module').then(
        (m) => m.AudioElementModule
      ),
  },
  {
    path: 'language',
    loadChildren: () =>
      import('../language-selector/language-selector.module').then(
        (m) => m.LanguageSelectorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioGuideRoutingModule {}
