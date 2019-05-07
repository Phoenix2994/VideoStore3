import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchingTerm: string;

  constructor(private router: Router, private authService: AuthService, private movieService: MovieService) { }

  ngOnInit() { }

  LogoutUser() {
    this.authService.setLoggedIn(false);
    this.router.navigateByUrl('/login');
  }

  setSearchingTerm() {
    this.router.navigateByUrl('/dashboard');
    this.movieService.searchingTerm
      .next(this.searchingTerm);
  }
}
