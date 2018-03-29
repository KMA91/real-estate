import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../../services/properties.service';

@Component({
  selector: 'app-properties-edit',
  templateUrl: './properties-edit.component.html',
  styleUrls: ['./properties-edit.component.scss']
})
export class PropertiesEditComponent implements OnInit {

  public listings;
  public showAdd: boolean = false;
  public showAddress: boolean = false;
  public changedAddress: string;
  public showAddID: string;
  public error: string;

  constructor(
    private _listingService: PropertiesService
  ) { }

  ngOnChanges(){
    console.log('change change');
  }

  ngOnInit() {
    this.getListings()
  }

  getListings(){
    this._listingService.getAllListings()
    .then((listings)=> {this.listings = listings;})
    .catch()
  }

  changeSoldStatus(id){
    id = { id }
    this._listingService.changeSoldStatus(id)
    .then(() => this.getListings() )
    .catch()
  }

  deleteImage(id, path){
    const info = { id, path }
    this._listingService.deleteImage(info)
    .then(() => this.getListings() )
    .catch()
  }

  deleteListing(id){
    id = { id }
    this._listingService.deleteListing(id)
    .then(() => this.getListings() )
    .catch()
  }

  showAddressForm(){
    if(this.showAddress){
      this.showAddress = false;
    }else{
      this.showAddress = true;
    }
  }

  changeAddress(info){
    const newInfo = info.value
    console.log(newInfo);
    // if(newAddress.address == ''){
    //   this.error = "Address field can't be empty"
    // }else{
    //   this._listingService.changeAddress(newAddress)
    //   .then()
    //   .catch()
    // }
  }

  toggleShow(id){
    this.showAddID = id;
    if(this.showAdd == false){
      this.showAdd = true;
    }else{
      this.getListings();
      this.showAdd = false
    }
  }
}
