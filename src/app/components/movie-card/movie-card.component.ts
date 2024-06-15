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
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Output() addToFavorite = new EventEmitter<any>();
  @Output() addToWatchLists = new EventEmitter<any>();

  public id: number = Infinity;
  ngOnInit() {
    this.id = this.movie.id;
  }
  addToFavorites() {
    this.addToFavorite.emit(this.id);
    console.log('addToFavorite');
  }
  addToWatchList() {
    this.addToWatchLists.emit(this.id);
  }
}
