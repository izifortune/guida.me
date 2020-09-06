import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementSearchRoutingModule } from './element-search-routing.module';
import { ElementSearchComponent } from './element-search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ElementSearchComponent],
  imports: [
    CommonModule,
    ElementSearchRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    TranslateModule,
  ],
})
export class ElementSearchModule {}
