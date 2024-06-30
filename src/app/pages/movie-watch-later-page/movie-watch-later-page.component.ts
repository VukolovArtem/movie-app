import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '@app/components/movie-card/movie-card.component';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-movie-watch-later-page',
  standalone: true,
  imports: [MovieCardComponent, MovieListComponent],
  templateUrl: './movie-watch-later-page.component.html',
  styleUrl: './movie-watch-later-page.component.scss',
})
export class MovieWatchLaterPageComponent implements OnInit {
  constructor(public movieService: MovieService) {}

  public watchLaters: Array<any> = [];

  ngOnInit(): void {
    this.watchLaters = this.movieService.getWatchLater();
  }
}
