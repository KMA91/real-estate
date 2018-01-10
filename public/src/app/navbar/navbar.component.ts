import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn;
  public subscription: Subscription;

  constructor(
    private _loginService: LoginService
  ) {
    this.subscription = this._loginService.isLoggedIn().subscribe(loggedin => {this.loggedIn = loggedin})
  }

  ngOnInit() {
    this.getLoggedIn()
  }

  getLoggedIn(){
    if(localStorage.getItem('token')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

  logout(){
    this._loginService.logOut();
    this.loggedIn = false;
  }

  myFunction(){
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.innerHTML = "X";
    } else {
        x.className = "topnav";
        y.innerHTML = "&#9776";
    }
  }

  close(){
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("icon");
    x.className = "topnav";
    y.innerHTML = "&#9776";
  }

}
