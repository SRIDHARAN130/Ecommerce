import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

export interface products{
  id:number,
  title:string,
  price:number,
  image:string
}

@Injectable({
  providedIn: 'root'
})
export class Checkout {

  mobiles:products[] = [];

  // private productsSub$ = new BehaviorSubject<products[]>([])

  // public product$:Observable<products[]> = this.productsSub$.asObservable()

   sendProduct(product:Product){
        // this.mobiles.push(product)

        // this.productsSub$.next(this.mobiles)
   }

   getProduct(id:number) :products[]{

    console.log(id)
    return this.mobiles.filter(m => m.id === id)
   }
}




  // mobiles = [
  //   {
  //     id:0,
  //     title:'',
  //     price:0,
  //     image:''
  //   }
  // ]
  

  // buyproduct(mobile:{id:number,title:string,price:number,image:string}){

  //   this.mobiles.push(mobile)

  // }

  // getproduct(){
  //   return this.mobiles
  // }