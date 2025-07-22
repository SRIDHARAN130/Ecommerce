import { ChangeDetectorRef, Component } from '@angular/core';
import { products } from '../../services/checkout';
import { CartsService } from '../../services/cart-service';
import { shareImports } from '../../sharedModules';
import { OrderService } from '../../services/orders-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  imports: [...shareImports],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  selectedId:number = 0

  constructor(private cart:CartsService,private router:Router,private active:ActivatedRoute,private cdr: ChangeDetectorRef  ){}

    carts:Product[]|null =null

  ngOnInit(): void {


    this.cart.getCart().subscribe(
      (res)=>{
        this.carts = res
        console.log('cart data',res)
        this.cdr.detectChanges();
      }
    )

    this.selectedId =  Number(this.active.snapshot.paramMap.get('id'))

    console.log(this.selectedId)
    this.cdr.detectChanges();
    if(this.selectedId > 0){
      this.cart.createCart(this.selectedId).subscribe(
        (res)=>{
          console.log("successfully submited",res)
        }
      )
    }

}

checkout(mobile:Product){

  this.router.navigate(['/checkout',mobile.product_id])

}

remove(mobile:Product){

  console.log(mobile.cart_id)

  this.cart.removeCart(mobile.cart_id).subscribe(
    (res)=>{
      console.log('cart deleted successfully',res)
      // this.cdr.detectChanges();
    }

  )

}
}
