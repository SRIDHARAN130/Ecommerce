import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Checkout, products } from '../../services/checkout';
import { shareImports } from '../../sharedModules';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/orders-service';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { MatDialog } from '@angular/material/dialog';
import {PaymentDialog} from '../payment-dialog/payment-dialog';

@Component({
  selector: 'app-check-out',
  imports: [...shareImports],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css'
})
export class CheckOut implements OnInit {

  selectedId:number = 0

  constructor(private products:ProductService,private router:Router,private check:Checkout,private active:ActivatedRoute ,private cdr: ChangeDetectorRef,private dialog: MatDialog ){}

  mobiles:Product[] | null =null

  ngOnInit(): void {

    this.selectedId =  Number(this.active.snapshot.paramMap.get('id'))

    console.log(this.selectedId)
  
    this.products.getProductsById(this.selectedId).subscribe(
      (res)=>{
        console.log(res)
           this.mobiles = res
           this.cdr.detectChanges();
      }
    )

}


// order(mobile:Product){

//   this.router.navigate(['/orders',mobile.product_id])

// }


order(mobile: Product) {
  const dialogRef = this.dialog.open(PaymentDialog, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(paymentType => {
    if (paymentType) {
      this.router.navigate(['/orders', mobile.product_id], {
        queryParams: { payment_type: paymentType }
      });
    }
  });

}



}

