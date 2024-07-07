import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCardComponent } from '@app/components/movie-card/movie-card.component';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { DateFormatPipe } from '@app/pipes/date-format.pipe';
import { MovieService } from '@app/services/movie.service';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { RoundingUpPipe } from '@app/pipes/rounding-up.pipe';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    MovieListComponent,
    DateFormatPipe,
    PanelModule,
    ButtonModule,
    RoundingUpPipe,
    RatingModule,
    FormsModule,
  ],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.scss',
})
export class MovieDetailPageComponent implements OnInit {
  movie: any;
  movieId: any;
  imageUrl!: string;
  rating!: number;
  

  constructor(
    public route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const movieId = Number(params.get('id'));
      this.movie = this.movieService.getMovieById(movieId);
    });

    this.imageUrl = this.getImageUrl(this.movie);
    this.rating = this.modifyTheRating();
  }

  getImageUrl(movie: { poster_path: any; backdrop_path: any }): string {
    return `https://image.tmdb.org/t/p/w500${
      movie.poster_path || movie.backdrop_path
    }`;
  }

  modifyTheRating(): number {
    return this.movie.vote_average / 1;
  }

  addToFavoritesList(): void {
    this.movieService.setFavorites(this.movie);
  }

  addToWatchLetterList(): void {
    this.movieService.setWatchLater(this.movie);
  }

  



}
