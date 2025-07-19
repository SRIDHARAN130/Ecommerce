import { Component } from '@angular/core';
import { shareImports } from '../../sharedModules';
import { CheckOut } from '../check-out/check-out';
import { Checkout } from '../../services/checkout';
import { Router } from '@angular/router';
import { Carts } from '../../services/cart';

@Component({
  selector: 'app-home',
  imports: [shareImports],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private check:Checkout,private router:Router,private cart:Carts){}


  mobiles = [
    {
      id:1,
      image: 'assets/images/vivo.jpg',
      title: 'vivo P3',
      price: 15999
    },
    {
      id:2,
      image: 'assets/images/oppo.jpg',
      title: 'oppo 14',
      price: 69999
    },
    {
      id:3,
      image: 'assets/images/mobile.jpg',
      title: 'realme S22',
      price: 62999
    },
    {
      id:4,
      image: 'assets/images/poco.jpg',
      title: 'poco S22',
      price: 54999
    },
    // {
    //   image: 'assets/images/poco.jpg',
    //   title: 'poco S22',
    //   price: 54999
    // }
  ];


  product(mobile:{id:number,title:string,price:number,image:string}){

    console.log(mobile.id)

      this.check.sendProduct(mobile)

        this.router.navigate(['/checkout',mobile.id])
 
  }

  carts(mobile:{id:number,title:string,price:number,image:string}){

    this.cart.sendProduct(mobile)


  }
}
