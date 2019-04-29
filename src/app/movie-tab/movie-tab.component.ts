import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-tab',
  templateUrl: './movie-tab.component.html',
  styleUrls: ['./movie-tab.component.css']
})
export class MovieTabComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
