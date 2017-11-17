import { Component, OnInit } from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-hot-releases',
  templateUrl: './hot-releases.component.html',
  styleUrls: ['./hot-releases.component.css']
})
export class HotReleasesComponent implements OnInit {
  public carousel: NgxCarousel;
  public mangas: Array<any>;
  public hasMouseMoved = false;
  public isMouseClicked = false;
  constructor() { }

  ngOnInit() {
    this.mangas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.carousel = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: false,
      animation: 'lazy',
      easing: 'ease'
    };
  }
  public carouselLoad(event: any) {
    const len = this.mangas.length;
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.mangas.push(i);
      }
    }
  }
  public mouseDownEvent() {
    this.isMouseClicked = true;
  }
  public mouseMoveEvent() {
    if (this.isMouseClicked) {
      this.hasMouseMoved = true;
    }
  }
  public mouseUpEvent() {
    if (this.hasMouseMoved) {
      console.log('drag');
    } else {
      console.log('click');
    }
    this.hasMouseMoved = false;
    this.isMouseClicked = false;
  }
}
