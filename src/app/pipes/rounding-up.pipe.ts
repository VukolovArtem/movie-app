import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundingUp',
  standalone: true,
})
export class RoundingUpPipe implements PipeTransform {
  transform(value: number, round: number = 0): number {
    return parseFloat(value.toFixed(round));
  }
}
