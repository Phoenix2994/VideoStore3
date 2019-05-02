import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  descIsLoaded = false;
  trailerIsLoaded = false;
  movie: [];
  movieTrailer: [];
  showDesc = true;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { }

  ngOnInit() {
    this.getChosenMovie();
    this.getMovieTrailer();
  }

  getChosenMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getChosenMovie(id)
      .subscribe(data => {
        this.movie = data;
        this.descIsLoaded = true;
      },
        (error) => {
          console.log(error);
        });
  }

  getMovieTrailer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieTrailer(id)
      .subscribe(data => {
        const movieVideos = data.results;
        this.movieTrailer = movieVideos.filter(video => video.type === 'Trailer');
        this.trailerIsLoaded = true;
      },
        (error) => {
          console.log(error);
        });

  }

  showDescription(): void {
    this.showDesc = true;
  }

  showTrailer(): void {
    this.showDesc = false;
  }
}
