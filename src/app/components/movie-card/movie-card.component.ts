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
import { RouterLink } from '@angular/router';

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
  constructor(public movieService: MovieService) {}

  ngOnInit(): void {}

  @Input() movie: any;
  @Input() isFavorite: boolean = false;
  @Input() isDetail: boolean = false;

  @Output() addToFavorite = new EventEmitter<any>();
  @Output() addToWatchLetter = new EventEmitter<any>();

  getImageUrl(movie: { poster_path: any; backdrop_path: any }): string {
    return `https://image.tmdb.org/t/p/w500${
      movie.poster_path || movie.backdrop_path
    }`;
  }

  addToFavoritesList(): void {
    this.movieService.setFavorites(this.movie);
  }

  addToWatchLetterList(): void {
    this.movieService.setWatchLater(this.movie);
  }

  goToDetail(): void {}
}
