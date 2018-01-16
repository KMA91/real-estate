import { Component, OnInit, HostListener } from '@angular/core';
import { ListingService } from './../listing/listing.service';
import { fadeInAnimation } from '../_animations/index';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LandingComponent implements OnInit {

  public carouselTileItems: Array<any> = [];
  public carouselTile: NgxCarousel;

  constructor(
    private _listingService: ListingService
  ) { }

  ngOnInit() {

    this.getActive();

    this.carouselTile = {
      grid: { xs: 2, sm: 2, md: 2, lg: 2, all: 0 },
      speed: 600,
      interval: 3000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 1,
      touch: true
    };
  }

  getActive() {
    this._listingService.getAllActiveListings()
    .then((listings) => {
      for(var i = 0; i < listings.length; i++){
        this.carouselTileItems.push(listings[i].paths[0])
      }
    })
    .catch()
  }
}
