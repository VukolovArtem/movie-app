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
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() maxRating: any;
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
