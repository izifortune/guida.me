import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'guide/:id',
    loadChildren: () =>
      import('./audio-guide/audio-guide.module').then(
        (m) => m.AudioGuideModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'language',
    loadChildren: () =>
      import('./language-selector/language-selector.module').then(
        (m) => m.LanguageSelectorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
