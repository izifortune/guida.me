import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ExhibitionService {
  constructor(private translate: TranslateService) {}

  getExhibition(code: any) {
    const lang = this.translate.currentLang;
    console.log(lang);
    // TODO pagamento
    if (code === 'SOM') {
      return {
        elements: [
          {
            name: 'test',
          },
        ],
      };
    }
    return {
      author: 'Bansky',
      title: 'audioguide.exhibition.title',
      description: 'audioguide.exhibition.description',
      image:
        'https://www.chiostrodelbramante.it/wp-content/uploads/2020/06/home-page-banksy-jack-jill_blu.png',
      elements: [
        {
          name: 'audioguide.element.baloon.name',
          year: 2002,
          id: 1,
          audio:
            lang === 'it'
              ? '/assets/audio/bansky.it.mp3'
              : '/assets/audio/baloon.en.mp3',
          description: 'audioguide.element.baloon.description',
          image:
            'https://guyhepner.com/wp-content/uploads/2015/05/Girl-with-a-Balloon-by-Banksy.jpg',
        },
        {
          name: 'audioguide.element.labour.name',
          year: 2013,
          audio:
            lang === 'it'
              ? '/assets/audio/bansky.it.mp3'
              : '/assets/audio/labour.en.mp3',
          description: 'audioguide.element.labour.description',
          id: 2,
          image:
            'https://upload.wikimedia.org/wikipedia/en/5/5a/Banksy_Slave_Labour_Mural%2C_2012.jpg',
        },
        {
          name: 'audioguide.element.antiracism.name',
          id: 3,
          year: 2014,
          audio:
            lang === 'it'
              ? '/assets/audio/bansky.it.mp3'
              : '/assets/audio/pigeons.en.mp3',
          description: 'audioguide.element.antiracism.description',
          image: 'http://www.arte.it/foto/600x450/21/25734-mi_02_2.jpg',
        },
      ],
    };
  }
}
