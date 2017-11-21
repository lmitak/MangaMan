import { Injectable } from '@angular/core';
import {Manga} from '../manga.model';
import {Chapter} from '../chapter.model';

@Injectable()
export class MangaService {
  private mangas: Manga[] = [
    new Manga(
      {
        id: 0,
        title: 'One Piece',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: 'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1662/1662937-bigthumbnail.jpg'
      }
    ),
    new Manga(
      {
        id: 1,
        title: 'Bleach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: '../../assets/bleach.jpg'
      }
    ),
    new Manga(
      {
        id: 2,
        title: 'Boku no hero academia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: '../../assets/bokuNoHeroAcademia.jpg'
      }
    ),
    new Manga(
      {
        id: 3,
        title: 'Naruto Shipudden',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis eu lorem ac dignissim. Nam.',
        author: 'Aganagi',
        publisher: 'JStudio',
        imagePath: '../../assets/narutoShipudden.jpg'
      }
    ),
    new Manga(
      {
        id: 4,
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
  public getMangaByName(name: string): Manga {
    const mangas = this.getMangas();
    for (let manga of mangas) {
      if (manga.title === name) {
        return manga;
      }
    }
  }
  // getMangaOrderedByPopularity
  // getTop10PopularManga
  // getMangaOrderedByRating
  // getTop10RatedManga
}
