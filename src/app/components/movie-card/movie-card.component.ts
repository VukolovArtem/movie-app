import { CommonModule } from '@angular/common';
import { EventEmitter, OnInit } from '@angular/core';
import {} from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { DateFormatPipe } from 'app/pipes/date-format.pipe';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { RoundingUpPipe } from '@app/pipes/rounding-up.pipe';
import { MovieService } from '@app/services/movie.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    CommonModule,
    DateFormatPipe,
    CardModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    PanelModule,
    RoundingUpPipe,
    RouterLink,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Input() isFavorite: boolean = true;
  @Input() isDetail: boolean = false;

  imageUrl!: string;
  movieId!: string;
  rating!: number;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.imageUrl = this.getImageUrl(this.movie);
    this.rating = this.modifyTheRating();
    this.movieId = this.replaceId(this.movie.id);
  }

  getImageUrl(movie: { poster_path: any; backdrop_path: any }): string {
    return `https://image.tmdb.org/t/p/w500${
      movie.poster_path || movie.backdrop_path
    }`;
  }

  modifyTheRating(): number {
    return this.movie.vote_average / 2;
  }

  replaceId(id: number) {
    return `/${'movie/:id'.replace(':id', String(id))}`;
  }

  navigateToMovieDetails() {
    this.router.navigate([this.movieId]);
  }
  //--------------------------

  addToFavoritesList(): void {
    this.movieService.setFavorites(this.movie);
  }

  removeToFavoritesList(): void {
    this.movieService.removeFavorites(this.movie.id);
  }

  //--------------------------

  addToWatchLetterList(): void {
    this.movieService.setWatchLater(this.movie);
  }

  removeToWatchLetterList(): void {
    this.movieService.removeWatchLater(this.movie);
  }

  //--------------------------

  goToMovieDetail(movieId: number) {
    this.router.navigate(['/movie', movieId]);
    this.movieService.getMovieById(this.movie);
  }
}
