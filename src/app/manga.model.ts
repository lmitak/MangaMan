import {Chapter} from './chapter.model';
import { isUndefined } from 'util';
export interface IManga {
  title: string;
  description: string;
  publisher: string;
  author: string;
  imagePath: string;
  chapters?: Chapter[];
  rating?: number;
}
export class Manga {
  public title: string;
  public description: string;
  public publisher: string;
  public author: string;
  public imagePath: string;
  public chapters: Chapter[];
  public rating: number;

  constructor(manga: IManga) {
    this.title = manga.title;
    this.description = manga.description;
    this.publisher = manga.publisher;
    this.author = manga.author;
    this.imagePath = manga.imagePath;
    this.chapters = manga.chapters;
    this.rating = !isUndefined(manga.rating) ? manga.rating : 0;
  }
}
