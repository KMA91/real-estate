import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn;

  constructor() { }

  ngOnInit() {
  }

  changeResponsive(){
    var x = document.getElementById("Nav");
    var y = document.getElementById("icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.innerHTML = "X";
    } else {
        x.className = "topnav";
        y.innerHTML = "&#9776";
    }
  }

  closeMenu(){
    var x = document.getElementById("Nav");
    var y = document.getElementById("icon");
    x.className = "topnav";
    y.innerHTML = "&#9776";
  }

}
