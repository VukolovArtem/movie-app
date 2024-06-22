import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularityInTheRating',
  standalone: true,
})
export class PopularityInTheRatingPipe implements PipeTransform {
  transform(value: number): number {
    const maxPopularity = 10000;
    const maxRating = 5;

    return (value / maxPopularity) * maxRating;
  }
}
