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
}
