import { Pipe, PipeTransform } from '@angular/core';
import { OrderSummary } from '@models/order';

@Pipe({ name: 'summaryPipe' })
export class OrderSummaryPipe implements PipeTransform {
  transform(obj: OrderSummary): string[] {
    const tmpProducts = obj.products.filter(
      (el) => el[1] !== null && el[1] > 0
    );
    const tmpSliced = obj.sliced.filter((el) => el[1] !== null);
    const tmpComments = obj.comments.filter(
      (el) => el[1] !== null && el[1].length > 0
    );
    const res: string[] = [];
    tmpProducts.forEach((prodEl) => {
      res.push(`- ${prodEl[0]} : ${prodEl[1]}`);
      const sliced = tmpSliced.find((sliceEl) => sliceEl[0] === prodEl[0]);
      if (sliced && sliced[1]) {
        res[res.length - 1] = res[res.length - 1].concat(` - Tranché`);
      }
      const comment = tmpComments.find(
        (commentEl) => commentEl[0] === prodEl[0]
      );
      if (comment) {
        res[res.length - 1] = res[res.length - 1].concat(
          `<br>&nbsp;&nbsp;Commentaire : ${comment[1]}`
        );
      }
    });
    return res;
  }
}
