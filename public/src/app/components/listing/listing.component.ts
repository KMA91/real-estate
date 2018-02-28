import { Component, OnInit, OnChanges } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ListingComponent implements OnInit, OnChanges {

  // SHOWN LISTINGS
  public listings;
  // LISTINGS FROM API
  public allListings;
  // LISTINGS ARRAY AFTER API AND BEING SEPARATED
  public listingsArray = [];
  // CHANGE SHOWN BETWEEN ACTIVE/SOLD
  public active:boolean = true;
  // COUNTER FOR LENGTH OF PAGES
  public page:number = 0;
  // COUNTER FOR LENGTH FOR COLOR CHANGE

  constructor(
    private _listingService: ListingService
  ) { }

  ngOnInit() {
    this.getAllListings();
    // this.getActive();
  }

  ngOnChanges(){
    console.log('HELLO');
  }



  getAllListings(){
    // GET ALL LISTINGS FROM API
    this._listingService.getAllListings()
    .then(listings => {
      // LISTINGS FROM API IS NOW SAVED
      // console.log(listings);
      this.allListings = listings;
      // USED TO PLACE LISTINGS FOR BOTTOM ALGO
      let tempArr = [];
      // every 4 listings push tempArray into listingsArray
      // console.log(this.allListings.length);
      for(var i = 0 ; i < this.allListings.length+1; i++){
        if(tempArr.length < 4){
          // console.log(tempArr);
          tempArr.push(this.allListings[i]);
          // console.log(i + "is being pushed")
          // console.log(this.allListings.length);
        }else{
          // console.log("4 was found");
          this.listingsArray.push(tempArr);
          tempArr = [];
        }
        if(this.allListings.length - i == 3){
          this.listingsArray.push(tempArr);
          tempArr = [];
          for(i; i < this.allListings.length + 1 ; i++){
            tempArr.push(this.allListings[i]);
            console.log(i);
          }
          this.listingsArray.push(tempArr);
          break;
        }
      }
      console.log(this.listingsArray);
      // console.log(tempArr);
      // PUSH IN REMAINDER
      // if(tempArr.length > 0){
      //   this.listingsArray.push(tempArr);
      //   tempArr = [];
      // }
      // LET'S US KNOW HOW MANY PAGES THERE WILL BE
      this.page = this.listingsArray.length;
      // console.log(this.listingsArray);
      // SHOW THE FIRST 4 LISTINGS ON LOAD
      this.listings = this.listingsArray[0];
    })
    .catch();
  }

  leftClick(){
    this.listings = this.listingsArray[
        this.listingsArray.findIndex(
        listing =>
        listing === this.listings
      )
      - 1
    ]
  }

  rightClick(){
    this.listings = this.listingsArray[
        this.listingsArray.findIndex(
        listing =>
        listing === this.listings
      )
      + 1
    ]
  }

}
