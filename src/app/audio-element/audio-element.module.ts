import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioElementRoutingModule } from './audio-element-routing.module';
import { AudioElementComponent } from './audio-element.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AudioElementComponent],
  imports: [
    CommonModule,
    AudioElementRoutingModule,
    TranslateModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
})
export class AudioElementModule {}
