import { Injectable } from '@angular/core';
import { products } from './checkout';

@Injectable({
  providedIn: 'root'
})
export class Carts {
  
    carts:products[] = [];

  
     sendProduct(product:products){
          this.carts.push(product)
     }
  
     getProduct() :products[]{
      return this.carts
     }
}
