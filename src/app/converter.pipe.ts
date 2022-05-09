import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    console.log(value)
    return Number(value) * 1.60934;
  }

}
