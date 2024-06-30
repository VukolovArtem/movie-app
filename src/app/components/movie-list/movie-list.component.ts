import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { DividerModule } from 'primeng/divider';

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
  //  public maxRating: number = 10;

  @Input() movies: any[] = [];

//  @Output() favoriteMoviesSelected = new EventEmitter<any[]>();
//  @Output() watchLaterMoviesSelected = new EventEmitter<any[]>();
//  @Output() favoriteMovieIds: string[] = [];
//  @Output() watchLaterMovieIds: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // Ініціалізація.компонента
   // console.log('MovieListComponent initialized', this.movies);
  }
}
//addFavorite(movie: any): void {
//   const existingFavorite = this.favorites.find((fav) => fav.id === movie.id);

//   if (!existingFavorite) {
//     this.favorites.push(movie);
//     this.favoriteMovieIds.push(movie);
//     this.favoriteMoviesSelected.emit(this.favorites);
//   }
//   console.log('Favorites:', this.favorites);
// }

// addWatchLatter(movie: any): void {
//   const existingWatchLatters = this.watchLatters.find(
//     (wLat) => wLat.id === movie.id
//   );

//   if (!existingWatchLatters) {
//     this.watchLatters.push(movie);
//     this.watchLaterMovieIds.push(movie);
//     this.watchLaterMoviesSelected.emit(this.watchLatters);
//   }
//   console.log('WatchLatters:', this.watchLatters);
// }
