import { Component, OnInit } from '@angular/core';
import {MangaService} from '../shared/manga.service';
import {Manga} from '../manga.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MangaService]
})
export class HomepageComponent implements OnInit {
  public top10PopularManga: Manga[];
  public top10RatedManga: Manga[];
  constructor(private mangaService: MangaService) { }

  ngOnInit() {
    this.top10PopularManga = this.mangaService.getMangas();
    this.top10RatedManga = this.mangaService.getMangas();
  }
}
