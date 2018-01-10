import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class ListingService {

  constructor(
    private _http: Http
  ) { }

  getThreeListings(){
    return this._http.get("/api/getThreeListings")
    .map(data => data.json())
    .toPromise()
  }

  getAllActiveListings(){
    return this._http.get("/api/getActive")
    .map(data => data.json())
    .toPromise()
  }

  getAllSoldListings(){
    return this._http.get("/api/getSold")
    .map(data => data.json())
    .toPromise()
  }

  getListing(listing){
    return this._http.get("/api/getListing/" + listing)
    .map(data => data.json())
    .toPromise()
  }

  getAllListings(){
    return this._http.get("/api/getAllListings")
    .map(data => data.json())
    .toPromise()
  }

  changeSoldStatus(id){
    return this._http.post("/api/changeStatus", id)
    .map(data => data.json())
    .toPromise()
  }

  deleteImage(info){
    return this._http.post("/api/deleteImage", info)
    .map(data => data.json())
    .toPromise()
  }

  deleteListing(id){
    return this._http.post("/api/deleteListing", id)
    .map(data => data.json())
    .toPromise()
  }

  addListing(address){
    return this._http.post('/api/addlisting', address)
    .map(data => data.json())
    .toPromise()
  }

  addMoreImages(info){
    return this._http.post('/api/addMoreImages', info)
    .map(data => data.json())
    .toPromise()
  }

  changeAddress(info){
    return this._http.post('/api/changeAddress', info)
    .map(data => data.json())
    .toPromise()
  }
}
