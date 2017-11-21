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
  @Input() mangas: Manga[];
  constructor() { }
  ngOnInit() {
  }

}
