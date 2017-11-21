import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manga } from '../manga.model';
import { MangaService } from '../shared/manga.service';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
  providers: [MangaService]
})
export class MangaComponent implements OnInit {
  manga: Manga;
  constructor(private route: ActivatedRoute, private mangaService: MangaService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const mangaName = params['manga'];
        this.manga = this.mangaService.getMangaByName(mangaName);
        console.log(this.manga);
      }
    );
  }

}
