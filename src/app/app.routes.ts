import { Routes } from '@angular/router';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { MovieGuard } from '@app/guards/movie.guard';
import { MovieResolver } from './guards/movie.resolver';

import { MovieFavoritePageComponent } from './pages/movie-favorite-page/movie-favorite-page.component';
import { MovieWatchLaterPageComponent } from './pages/movie-watch-later-page/movie-watch-later-page.component';
import { NowPlayingMoviePageComponent } from './pages/now-playing-movie-page/now-playing-movie-page.component';
import { TopRateMoviePageComponent } from './pages/top-rate-movie-page/top-rate-movie-page.component';
import { UpcomingMoviePageComponent } from './pages/upcoming-movie-page/upcoming-movie-page.component';
import { PopularMoviePageComponent } from './pages/popular-movie-page/popular-movie-page.component';

export const routes: Routes = [
  { path: '', component: MovieListPageComponent },
  {
    path: 'movie/:id',
    canActivate: [MovieGuard],
    component: UpcomingMoviePageComponent,
    resolve: { data: MovieResolver },
  },
  { path: 'popular', component: PopularMoviePageComponent },
  { path: 'now-playing', component: NowPlayingMoviePageComponent },
  { path: 'top-rate', component: TopRateMoviePageComponent },
  { path: 'upcoming', component: UpcomingMoviePageComponent },
  { path: 'favorite', component: MovieFavoritePageComponent },
  { path: 'watch-list', component: MovieWatchLaterPageComponent },
];

//MovieDetailPageComponent
