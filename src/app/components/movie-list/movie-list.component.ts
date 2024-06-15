import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies = [
    {
      adult: false,
      backdrop_path: 'assets/img/KingdomOfThePlanetOfTheApes.jpg',

      id: 653346,
      original_language: 'en',
      original_title: 'Kingdom of the Planet of the Apes',
      overview:
        "Several generations in the future following Caesar's reign, apes are now the dominant species.",
      popularity: 4703.624,
      poster_path: '/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
      release_date: '2024-05-08',
      title: 'Kingdom of the Planet of the Apes',
    },
    {
      backdrop_path: 'assets/img/CivilWar.jpg',

      id: 929590,
      original_language: 'en',
      original_title: 'Civil War',
      overview:
        'In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.',
      popularity: 2418.019,
      poster_path: '/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg',
      release_date: '2024-04-10',
      title: 'Civil War',
    },
    {
      backdrop_path: 'assets/img/GodzillaxKongTheNewEmpire.jpg',

      id: 823464,
      original_language: 'en',
      original_title: 'Godzilla x Kong: The New Empire',
      overview:
        'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      popularity: 1931.335,
      poster_path: '/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      release_date: '2024-03-27',
      title: 'Godzilla x Kong: The New Empire',
    },
    {
      backdrop_path: 'assets/img/Tarot.jpg',

      id: 719221,
      original_language: 'en',
      original_title: 'Tarot',
      overview:
        'When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. ',
      popularity: 1540.535,
      poster_path: '/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg',
      release_date: '2024-05-01',
      title: 'Tarot',
    },
  ];

  showFavorite(id: number) {
    let movie: any = this.movies.find((movie) => movie.id === id);
    movie.isFavorite = !movie.isFavorite;
  }
  showWatchList(id: number) {
    let movie: any = this.movies.find((movie) => movie.id === id);
    movie.isInWatchList = !movie.isInWatchList;
  }
}
