import {Chapter} from './chapter.model';

export class Manga {
  public title: string;
  public description: string;
  public publisher: string;
  public author: string;
  public imagePath: string;
  public chapters: [Chapter];

  constructor(title: string,
              description: string,
              publisher: string,
              author: string,
              imagePath: string,
              chapters: [Chapter]) {
    this.title = title;
    this.description = description;
    this.publisher = publisher;
    this.author = author;
    this.imagePath = imagePath;
    this.chapters = chapters;
  }
}
