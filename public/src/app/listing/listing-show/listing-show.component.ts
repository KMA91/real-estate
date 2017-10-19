import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-listing-show',
  templateUrl: './listing-show.component.html',
  styleUrls: ['./listing-show.component.css']
})
export class ListingShowComponent implements OnInit {

  public imageSources = [""];
  public config: ICarouselConfig = {
  verifyBeforeLoad: true,
  log: false,
  animation: true,
  animationType: AnimationConfig.SLIDE,
  autoplay: false,
  autoplayDelay: 2000,
  stopAutoplayMinWidth: 768
  };

  constructor() { }

  ngOnInit() {
  }

}
