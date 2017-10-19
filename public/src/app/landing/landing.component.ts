import { Component, OnInit } from '@angular/core';
import { ListingService } from './../listing/listing.service';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public threelisting = [];
  public testimonial = "\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate. I appreciate his great attention to detail and how he always makes time for his clients. I   highly recommend Tony Ma for any of your real estate needs!\" - Sally Zhen";
  public imageSources = [];
  public config: ICarouselConfig = {
    verifyBeforeLoad: false,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: false,
    autoplayDelay: 500,
    stopAutoplayMinWidth: 768
  }
  constructor(
    private _listingService: ListingService
  ) { }

  ngOnInit() {
    this.getThree();
  }

  getThree(){
    this._listingService.getThreeListings()
    .then((listings) => {
      this.threelisting = listings;
      for(var i = 0; i < this.threelisting.length; i++){
        this.imageSources.push(this.threelisting[i].paths[0]);
      }
    })
    .catch()
  }
}
