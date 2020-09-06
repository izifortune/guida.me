import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { AudioGuideRoutingModule } from './audio-guide-routing.module';
import { AudioGuideComponent } from './audio-guide.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AudioGuideComponent],
  imports: [
    CommonModule,
    AudioGuideRoutingModule,
    MatCardModule,
    TranslateModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class AudioGuideModule {}
