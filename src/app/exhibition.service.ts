import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExhibitionService {
  constructor() {}

  getExhibition(code: any) {
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
      description: 'audioguide.exhibition.dscription',
      image:
        'https://www.chiostrodelbramante.it/wp-content/uploads/2020/06/home-page-banksy-jack-jill_blu.png',
      elements: [
        {
          name: 'audioguide.element.baloon.name',
          year: 2002,
          id: 1,
          audio:
            'https://freemp3cloud.com/mr/577f7705960c09b4c194bad5633343b9.mp3?session_key=c932b6194172f2119be9a1d7e8604a57',
          description: 'audioguide.element.baloon.description',
          image:
            'https://guyhepner.com/wp-content/uploads/2015/05/Girl-with-a-Balloon-by-Banksy.jpg',
        },
        {
          name: 'audioguide.element.labour.name',
          year: 2013,
          description: 'audioguide.element.labour.description',
          id: 2,
          image:
            'https://upload.wikimedia.org/wikipedia/en/5/5a/Banksy_Slave_Labour_Mural%2C_2012.jpg',
        },
        {
          name: 'audioguide.element.antiracism.name',
          id: 3,
          year: 2014,
          description: 'audioguide.element.antiracism.description',
          image: 'http://www.arte.it/foto/600x450/21/25734-mi_02_2.jpg',
        },
      ],
    };
  }
}
