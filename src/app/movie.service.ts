import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie';
  private apiKey = 'c4d79d0d1e50bf8bc86b7afbd240e4df';
  private language;

  constructor(private http: HttpClient) {
    this.language = 'en-US';
  }

  getMovies(): Observable<any> {
    return this.http.get(`${this.url}/popular?api_key=${this.apiKey}&language=${this.language}&page=${1}`);
  }

  getChosenMovie(id): Observable<any> {
    return this.http.get(`${this.url}/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getMovieTrailer(id): Observable<any> {
    return this.http.get(`${this.url}/${id}/videos?api_key=${this.apiKey}&language=${this.language}`);
  }
}
