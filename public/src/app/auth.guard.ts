import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this._loginService.getUserLoggedIn()){
        return true;
      }else{
        this._router.navigate(['/'])
        return false;
      }
  }
}
