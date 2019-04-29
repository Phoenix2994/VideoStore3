import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthGuardService } from '../guards/auth-guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  notAuth: boolean;
  requiredVal: boolean;
  wrongVal: boolean;

  constructor(private router: Router, private authService: AuthService, private authGuard: AuthGuardService) {
  }

  ngOnInit() {
    this.notAuth = this.authGuard.getNotAuth();
  }

  LoginUser() {
    if (this.email === 'admin@eng.it' && this.password === 'admin') {
      this.authService.setLoggedIn(true);
      this.router.navigateByUrl('/dashboard');
    } else {
      if (this.email === '' || this.password === '') {
        this.requiredVal = true;
        this.wrongVal = false;
        this.notAuth = false;
      } else {
        this.wrongVal = true;
        this.requiredVal = false;
        this.notAuth = false;
      }
    }


  }

}
