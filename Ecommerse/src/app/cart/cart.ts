import { Component } from '@angular/core';
import { products } from '../../services/checkout';
import { Carts } from '../../services/cart';
import { shareImports } from '../../sharedModules';
import { Order } from '../../services/orders';

@Component({
  selector: 'app-cart',
  imports: [shareImports],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  constructor(private cart:Carts,private orders:Order){}

  carts:products[] = []

  ngOnInit(): void {

    const filtered  = this.cart.getProduct()

    this.carts = filtered;

}

order(mobile:products){
  this.orders.sendProduct(mobile)
}

}
