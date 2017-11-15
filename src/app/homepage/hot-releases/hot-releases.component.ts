import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-releases',
  templateUrl: './hot-releases.component.html',
  styleUrls: ['./hot-releases.component.css']
})
export class HotReleasesComponent implements OnInit {
  mangas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit() {
  }

}
