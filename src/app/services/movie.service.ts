import { Injectable } from '@angular/core';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '@app/data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  private _favorites: Array<any> = [];
  private _watchLater: Array<any> = [];

  getNowPlayingMovies() {
    return nowPlayingMovies;
  }

  getPopularMovies() {
    return popularMovies;
  }

  getTopRatedMovies() {
    return topRatedMovies;
  }

  getUpcomingMovies() {
    return upcomingMovies;
  }
  //----Favorites Page-----
  getFavorites() {
    console.log('getFav', this._favorites);
    return this._favorites;
  }
  setFavorites(movie: any) {
    const movieExists = this._favorites.some(
      (fMovie) => fMovie.id === movie.id
    );

    if (!movieExists) {
      this._favorites.push(movie);
    }
  }
  removeFavorites(id: number) {
    this._favorites = this._favorites.filter((e) => e.id !== id);
  }
  //-----------------------
  //---Watch Later Page---
  getWatchLater() {
    return this._watchLater;
  }

  setWatchLater(movie: any) {
    const movieExists = this._watchLater.some(
      (wLater) => wLater.id === movie.id
    );

    if (!movieExists) {
      this._watchLater.push(movie);
    }
  }

  removeWatchLater(id: number) {
    this._watchLater = this._watchLater.filter((e) => e.id !== id);
  }
}
//-----------------------
