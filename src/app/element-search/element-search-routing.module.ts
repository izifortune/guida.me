import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementSearchComponent } from './element-search.component';

const routes: Routes = [{ path: '', component: ElementSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementSearchRoutingModule { }
