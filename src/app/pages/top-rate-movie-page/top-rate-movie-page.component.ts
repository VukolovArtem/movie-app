import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieCardComponent } from '@app/components/movie-card/movie-card.component';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-top-rate-movie-page',
  standalone: true,
  imports: [MovieListComponent, MovieCardComponent],
  templateUrl: './top-rate-movie-page.component.html',
  styleUrl: './top-rate-movie-page.component.scss',
})
export class TopRateMoviePageComponent implements OnInit {
  topRatedMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.topRatedMovies = this.movieService.getTopRatedMovies();
  }
}
