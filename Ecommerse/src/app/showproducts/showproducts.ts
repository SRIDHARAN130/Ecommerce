import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkout } from '../../services/checkout';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../models/product';
import { PaymentDialog } from '../payment-dialog/payment-dialog';
import { shareImports } from '../../sharedModules';

@Component({
  selector: 'app-showproducts',
  imports: [shareImports],
  templateUrl: './showproducts.html',
  styleUrl: './showproducts.css'
})
export class Showproducts implements OnInit {

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
