import {Component, Input, OnInit} from '@angular/core';
import {Manga} from '../../manga.model';
import {Chapter} from '../../chapter.model';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {
  @Input() title: string;
  mangas = [];
  constructor() { }
  ngOnInit() {
    let chapter1 = new Chapter('chapter', 'asdfsdfa adffadjsfjakse fdsafdsaf', 32000, '');
    let manga1 = new Manga('One Piece', 'loremipsum dolor sit amet amethus', 'awasana', 'awasana', '', [chapter1]);
    this.mangas.push(manga1);
    console.log(this.mangas);
  }

}
