import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class LoginService {

  private isUserLoggedIn = false;
  public username;

  constructor(
    private _http: Http
  ) {}

  login(info){
    return this._http.post('/api/login', info)
    .map(data => data.json())
    .toPromise()
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
    this.username = 'admin';
  }
}
