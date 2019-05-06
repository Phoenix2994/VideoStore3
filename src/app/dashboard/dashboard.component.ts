import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchingTerm: string;
  movies: [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
    this.getSearchingTerm();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.results;
    },
      (error) => {
        console.log(error);
      });
  }

  getSearchingTerm() {
    this.movieService.searchingTerm.subscribe((term) => {
      this.movieService.findMovie(term).subscribe((data) => {
        this.movies = data.results;
      },
        (error) => {
          console.log(error);
        });
    },
      (error) => {
        console.log(error);
      });
  }
}
