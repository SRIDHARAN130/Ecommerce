import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { shareImports } from '../../sharedModules';
import { ProductService } from '../../services/product-service';
import { CartsService } from '../../services/cart-service';
import { Checkout } from '../../services/checkout';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  imports: [...shareImports],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  constructor(private products:ProductService,private cart:CartsService,private check:Checkout,private router:Router,private cdr: ChangeDetectorRef){}

 
  mobiles:Product[]|null = null;

  ngOnInit(): void {
      this.products.getProducts().subscribe(
        (res)=>{
          console.log('mobiles',res)
          this.mobiles = res

          this.cdr.detectChanges();
        }
      )
  }

  get mobileProducts(): Product[] {
    return this.mobiles?.filter(m => m?.category === 'Mobile') || [];
  }

  get twsProducts(): Product[] {
    return this.mobiles?.filter(m => m?.category === 'TWS') || [];
  }

  get speakerProducts(): Product[] {
    return this.mobiles?.filter(m => m?.category === 'Speakers') || [];
  }

  get watchProducts(): Product[] {
    return this.mobiles?.filter(m => m?.category === 'Watches') || [];
  }

  get tvProducts(): Product[] {
    return this.mobiles?.filter(m => m?.category === 'TV') || [];
  }

  get furnitureProducts(): Product[] {
    return this.mobiles?.filter(m => m?.category === 'Furniture') || [];
  }


  show(mobile:Product){
    this.router.navigate(['/show',mobile.product_id])
  }

  product(mobile:Product){

    console.log(mobile.product_id)

      // this.products.getProductsById(mobile.product_id).

        this.router.navigate(['/checkout',mobile.product_id])
 
  }

  cartt(mobile:Product){


    console.log(mobile)

    this.router.navigate(['/carts',mobile.product_id])
    
  }

}
