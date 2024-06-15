import { CommonModule } from '@angular/common';
import { EventEmitter, OnInit } from '@angular/core';
import {} from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() isFavorite: boolean = false;
  @Output() addToFavorite = new EventEmitter<any>();
  @Output() addToWatchLetter = new EventEmitter<any>();

  addToFavoritesList(): void {
    this.addToFavorite.emit(this.movie);
    console.log('addToFavorite');
  }
  addToWatchLetterList(): void {
    this.addToWatchLetter.emit(this.movie);
    console.log('addToFavorite');
  }
}
