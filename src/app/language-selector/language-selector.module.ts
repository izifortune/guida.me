import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageSelectorRoutingModule } from './language-selector-routing.module';
import { LanguageSelectorComponent } from './language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [
    CommonModule,
    LanguageSelectorRoutingModule,
    TranslateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class LanguageSelectorModule {}
