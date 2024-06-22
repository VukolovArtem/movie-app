import { Routes } from '@angular/router';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { MovieGuard } from '@app/guards/movie.guard';

export const routes: Routes = [
  { path: '', component: MovieListPageComponent },
  {
    path: 'movie/:id',
    canActivate: [MovieGuard],
    component: MovieDetailPageComponent,
  },
];
