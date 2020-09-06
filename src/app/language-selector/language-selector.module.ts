import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageSelectorRoutingModule } from './language-selector-routing.module';
import { LanguageSelectorComponent } from './language-selector.component';


@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [
    CommonModule,
    LanguageSelectorRoutingModule
  ]
})
export class LanguageSelectorModule { }
