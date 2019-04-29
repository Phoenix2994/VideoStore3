import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from './movie-list';
import { Movie } from './model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[];

  constructor() { }

  getMovies(): Observable<Movie[]> {
    this.movies = MOVIES.sort(this.sortByTitle);
    return of(this.movies);
  }

  sortByTitle(a, b) {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

}
