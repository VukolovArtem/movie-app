import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '@app/components/movie-card/movie-card.component';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-movie-favorite-page',
  standalone: true,
  imports: [MovieCardComponent, MovieListComponent],
  templateUrl: './movie-favorite-page.component.html',
  styleUrl: './movie-favorite-page.component.scss',
})
export class MovieFavoritePageComponent implements OnInit {
  constructor(public movieService: MovieService) {}

  public favorites: Array<any> = [];

  ngOnInit(): void {
    this.favorites = this.movieService.getFavorites();
  }
}
