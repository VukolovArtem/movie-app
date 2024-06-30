import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-upcoming-movie-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './upcoming-movie-page.component.html',
  styleUrl: './upcoming-movie-page.component.scss',
})
export class UpcomingMoviePageComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  public upcomingMovies: Array<any> = [];

  ngOnInit(): void {
    this.upcomingMovies = this.movieService.getUpcomingMovies();
  }
}
