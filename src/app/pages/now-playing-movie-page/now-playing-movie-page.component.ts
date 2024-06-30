import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '@app/components/movie-card/movie-card.component';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-now-playing-movie-page',
  standalone: true,
  imports: [MovieListComponent, MovieCardComponent],
  templateUrl: './now-playing-movie-page.component.html',
  styleUrl: './now-playing-movie-page.component.scss',
})
export class NowPlayingMoviePageComponent implements OnInit {
  public nowPlayingMovies: any[] = [];

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.nowPlayingMovies = this.movieService.getNowPlayingMovies();
    console.log('Pop', this.nowPlayingMovies);
  }
}
