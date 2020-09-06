import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageSelectorComponent } from './language-selector.component';

const routes: Routes = [{ path: '', component: LanguageSelectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageSelectorRoutingModule { }
