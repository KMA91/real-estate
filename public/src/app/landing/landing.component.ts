import { Component, OnInit, HostListener } from '@angular/core';
import { ListingService } from './../listing/listing.service';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LandingComponent implements OnInit {

  constructor(
    private _listingService: ListingService
  ) { }

  ngOnInit() {
  }

  // @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  //   console.log($event);
  //   console.log("scrolling");
  // }

}
