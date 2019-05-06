import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public searchingTerm: Subject<string>;
  private url = 'https://api.themoviedb.org/3';
  private apiKey = 'c4d79d0d1e50bf8bc86b7afbd240e4df';
  private language;

  constructor(private http: HttpClient) {
    this.language = 'en-US';
    this.searchingTerm = new Subject<string>();
  }

  getMovies(): Observable<any> {
    return this.http.get(`${this.url}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${1}`);
  }

  getChosenMovie(id): Observable<any> {
    return this.http.get(`${this.url}/movie/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getMovieTrailer(id): Observable<any> {
    return this.http.get(`${this.url}/movie/${id}/videos?api_key=${this.apiKey}&language=${this.language}`);
  }

  findMovie(title): Observable<any> {
    return this.http.get(`${this.url}/search/movie?api_key=${this.apiKey}&language=en-US&query=${title}&page=1&include_adult=false`);
  }

}
