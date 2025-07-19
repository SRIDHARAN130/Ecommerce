import { Component } from '@angular/core';
import { Order } from '../../services/orders';
import { products } from '../../services/checkout';
import { shareImports } from '../../sharedModules';


@Component({
  selector: 'app-orders',
  imports: [shareImports],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {


    constructor(private cart:Order){}
  
    orders:products[] = []
  
    ngOnInit(): void {
  
      const filtered  = this.cart.getProduct()
  
      this.orders = filtered;
  
  }
}
