import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',   // ⚠️ THIS NAME MATTERS
  standalone: true
})
export class PipesPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) return '';
    return '₹' + value;
  }

}
