import { Injectable } from '@angular/core';
import { products } from './checkout';

@Injectable({
  providedIn: 'root'
})
export class Order {
  

  orders:products[] = [];


   sendProduct(product:products){
        this.orders.push(product)

        // this.productsSub$.next(this.mobiles)
   }

   getProduct() :products[]{

    return this.orders
    // .filter(m => m.id === id)
   }
}

