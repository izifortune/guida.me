import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  selectedLanguage: string;
  languages: any;

  constructor(private translate: TranslateService) {
    this.selectedLanguage =
      this.translate.currentLang || this.translate.defaultLang;
    this.languages = [
      {
        name: 'lang.it',
        code: 'it',
      },
      {
        name: 'lang.en',
        code: 'en',
      },
    ];
  }

  ngOnInit(): void {}

  public back() {
    window.history.back();
  }

  public change(event: any) {
    this.translate.use(event.value);
  }
}
