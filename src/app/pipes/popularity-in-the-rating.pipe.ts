import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularityInTheRating',
  standalone: true,
})
export class PopularityInTheRatingPipe implements PipeTransform {
  transform(value: number, maxRating: number = 5): number {
    if (value == null || isNaN(value)) {
      return 0;
    }
    return value / maxRating;
  }
}
