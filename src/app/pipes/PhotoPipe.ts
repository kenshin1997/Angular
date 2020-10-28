import { Pipe, PipeTransform } from '@angular/core';
import {Photo} from '../interface/PhotoInterface';

@Pipe({
  name: 'photoPipe'
})
export class PhotoPipe implements PipeTransform {

  transform(value: Photo[]): string {
    return value.find(photo => photo.main === true).url;
  }

}
// export class ExponentialStrengthPipe implements PipeTransform {
//   transform(value: number, exponent?: number): number {
//     return Math.pow(value, isNaN(exponent) ? 1 : exponent);
//   }
