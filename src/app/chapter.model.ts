export class Chapter {
  public title: string;
  public summary: string;
  public releaseDate: Date;
  public imagePath: string;

  constructor(title: string, summary: string, releaseDate: number, imagePath: string) {
    this.title = title;
    this.releaseDate = new Date(releaseDate);
    this.imagePath = imagePath;
    this.summary = summary;
  }
}
