import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ListingComponent implements OnInit {

  public listings;
  public active:boolean = true;

  constructor(
    private _listingService: ListingService
  ) { }

  ngOnInit() {
    this.getActive();
  }

  getActive(){
    this._listingService.getAllActiveListings()
      .then((listings) => {
        this.listings = listings;
        this.active = true;
      })
      .catch()
  }

  getSold(){
    this._listingService.getAllSoldListings()
      .then((listings) => {
        this.listings = listings;
        this.active = false;
      })
      .catch()
  }
}
