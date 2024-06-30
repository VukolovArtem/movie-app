import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-movie-list-page',
  standalone: true,
  imports: [MovieListComponent, RouterLink, RouterModule],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.scss',
  providers: [MovieService],
})
export class MovieListPageComponent implements OnInit {
  popularMovie: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.popularMovie = this.movieService.getNowPlayingMovies();
  }
}
