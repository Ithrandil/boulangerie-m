import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'summaryPipe' })
export class OrderSummaryPipe implements PipeTransform {
  transform(arr: [string, number][]): string[] {
    const tmp = arr.filter((el) => el[1] !== null);
    const res: string[] = [];
    tmp.forEach((el) => res.push(`- ${el[0]} : ${el[1]}`));
    return res;
  }
}
