import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceformat'
})
export class PriceformatPipe implements PipeTransform {

  transform(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
