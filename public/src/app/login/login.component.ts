import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error;

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login(info){
    this._loginService.login(info.value)
    .then((success) => {this._loginService.setLoggedIn(); this._router.navigate(['/upload'])})
    .catch((err) => {info.resetForm();})
  }

}
