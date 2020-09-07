import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  flag: string;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
      .pipe(
        tap((val: any) => {
          switch (val.lang) {
            case 'it':
              this.flag =
                'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/it.png';
              break;
            case 'en':
              this.flag =
                'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/gb.png';
              break;

            default:
              this.flag =
                'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/it.png';
              break;
          }
        })
      )
      .subscribe();
    this.flag =
      this.translate.currentLang === 'it'
        ? 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/it.png'
        : 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/gb.png';
  }
}
