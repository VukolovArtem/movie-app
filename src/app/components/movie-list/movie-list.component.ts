import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { DividerModule } from 'primeng/divider';
import { nowPlayingMovies } from '@app/data/mock-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, DividerModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  public favorites: any[] = [];
  public watchLatters: any[] = [];
  public isFavorite: boolean = false;
  public maxRating: number = 10;

  movies = nowPlayingMovies;

  constructor() {}

  ngOnInit(): void {
    // Ініціалізація.компонента
    console.log('MovieListComponent initialized');
  }

  addFavorite(movie: any): void {
    const existingFavorite = this.favorites.find((fav) => fav.id === movie.id);

    if (!existingFavorite) {
      this.favorites.push(movie);
    }
    console.log('Favorites:', this.favorites);
  }

  addWatchLatter(movie: any): void {
    const existingWatchLatters = this.watchLatters.find(
      (wLat) => wLat.id === movie.id
    );

    if (!existingWatchLatters) {
      this.watchLatters.push(movie);
    }
    console.log('WatchLatters:', this.watchLatters);
  }
}
