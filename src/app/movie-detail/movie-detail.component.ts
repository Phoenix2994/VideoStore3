import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  isLoaded = false;
  movie: [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { }

  ngOnInit() {
    this.getChosenMovie();
  }

  getChosenMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getChosenMovie(id)
      .subscribe(data => {
        this.movie = data;
        this.isLoaded = true;
      },
        (error) => {
          console.log(error);
        });
  }
}
