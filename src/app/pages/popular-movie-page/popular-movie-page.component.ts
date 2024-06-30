import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-popular-movie-page',
  standalone: true,
  imports: [HeaderComponent, MovieListComponent],
  templateUrl: './popular-movie-page.component.html',
  styleUrl: './popular-movie-page.component.scss',
})
export class PopularMoviePageComponent implements OnInit {
  public popularMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.popularMovies = this.movieService.getPopularMovies();
  }
}
