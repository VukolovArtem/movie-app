import { Component } from '@angular/core';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';

@Component({
  selector: 'app-movie-list-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.scss',
})
export class MovieListPageComponent {}
