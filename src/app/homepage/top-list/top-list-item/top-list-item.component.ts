import {Component, Input, OnInit} from '@angular/core';
import {Manga} from '../../../manga.model';

@Component({
  selector: 'app-top-list-item',
  templateUrl: './top-list-item.component.html',
  styleUrls: ['./top-list-item.component.css']
})
export class TopListItemComponent implements OnInit {
  @Input() boxSize: number;
  @Input() manga: Manga;
  constructor() { }

  ngOnInit() {
  }

}
