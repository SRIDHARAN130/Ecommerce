import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { shareImports } from '../../sharedModules';
import { CheckOut } from '../check-out/check-out';
import { Checkout } from '../../services/checkout';
import { Router } from '@angular/router';
import { CartsService } from '../../services/cart-service';
import { ProductService } from '../../services/product-service';

import { Product } from '../../models/product';
import { cart } from '../../models/cart';


@Component({
  selector: 'app-home',
  imports: [...shareImports],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  @ViewChild('bannerContainer', { static: false }) bannerContainer!: ElementRef;

  @ViewChild('scrollfurnitureContainer', { static: false }) scrollfurnitureContainer!: ElementRef;


  images: string[] = [
    'public/banner/banner1.jpg',
    'public/banner/banner2.jpg',
    'public/banner/banner3.jpg',
    'public/banner/banner4.jpg',
    'public/banner/banner5.jpg',
    'public/banner/banner6.jpg',
    'public/banner/banner7.jpg',
    'public/banner/banner8.jpg',
    'public/banner/banner9.jpg',
  ];


  constructor(private products:ProductService,private cart:CartsService,private check:Checkout,private router:Router,private cdr: ChangeDetectorRef){}
 
  ngAfterViewInit(): void {
    setInterval(() => {
      this.bannerRight();
    }, 5000);
  }
 
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

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  scrollfurnLeft() {
    this.scrollfurnitureContainer.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollfurnRight() {
    this.scrollfurnitureContainer.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }


  bannerLeft() {
    this.bannerContainer.nativeElement.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }

  bannerRight() {
    this.bannerContainer.nativeElement.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  }

  get furnitureProducts(): Product[] {
    return this.mobiles?.filter(m => m?.category === 'Furniture') || [];
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

  show(mobile:Product){
    this.router.navigate(['/show',mobile.product_id])
  }
}
