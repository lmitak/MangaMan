import { Injectable } from '@angular/core';
import {Manga} from '../manga.model';
import {Chapter} from '../chapter.model';

@Injectable()
export class MangaService {
  private mangas: Manga[] = [
    new Manga('One Piece',
      'loremipsum dolor sit amet amethus',
      'awasana',
      'awasana',
      'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1662/1662937-bigthumbnail.jpg',
      [
        new Chapter('chapter', 'asdfsdfa adffadjsfjakse fdsafdsaf', 32000, '')
      ]
    )
  ];
  constructor() { }

  public getMangas(): Manga[] {
    return this.mangas.slice();
  }

  public getManga(index: number): Manga {
    return this.mangas[index];
  }
  // getMangaOrderedByPopularity
  // getTop10PopularManga
  // getMangaOrderedByRating
  // getTop10RatedManga
}
