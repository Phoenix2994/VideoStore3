import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  notAuth = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.getIsLoggedIn()) {
      this.setNotAuth(false);
      return true;
    } else {
      this.router.navigateByUrl('/login');
      this.setNotAuth(true);
      return false;
    }
  }

  getNotAuth(): boolean {
    return this.notAuth;
  }

  setNotAuth(value: boolean) {
    this.notAuth = value;
  }


}
