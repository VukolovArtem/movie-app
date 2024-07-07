import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, DividerModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  public favorites: any[] = [];
  public watchLatters: any[] = [];
  public isFavorite: boolean = false;

  @Input() movies: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
