import { Injectable } from '@angular/core';
import {Manga} from '../manga.model';
import {Chapter} from '../chapter.model';

@Injectable()
export class MangaService {
  private mangas: Manga[] = [
    new Manga(
      {
        title: 'One Piece',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: 'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1662/1662937-bigthumbnail.jpg'
      }
    ),
    new Manga(
      {
        title: 'Bleach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: '../../assets/bleach.jpg'
      }
    ),
    new Manga(
      {
        title: 'Boku no hero academia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: '../../assets/bokuNoHeroAcademia.jpg'
      }
    ),
    new Manga(
      {
        title: 'Naruto Shipudden',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: '../../assets/narutoShipudden.jpg'
      }
    ),
    new Manga(
      {
        title: 'Haikyuu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: '../../assets/Haikyuu!!.full.1888707.jpg'
      }
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
