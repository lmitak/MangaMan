import {Component, Input, OnInit} from '@angular/core';
import {Manga} from '../../../manga.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-list-item',
  templateUrl: './top-list-item.component.html',
  styleUrls: ['./top-list-item.component.css']
})
export class TopListItemComponent implements OnInit {
  @Input() boxSize: number;
  @Input() manga: Manga;
  @Input() mangaIndex: number;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate([this.manga.title]);
  }

}
