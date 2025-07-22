import { ChangeDetectorRef, Component } from '@angular/core';
import { OrderService } from '../../services/orders-service';
import { products } from '../../services/checkout';
import { shareImports } from '../../sharedModules';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { profiles } from '../../models/profiles';
import { profilesService } from '../../services/profilesService';


@Component({
  selector: 'app-orders',
  imports: [shareImports],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {



  selectedId:number = 0
  paymentType: string = ''

  constructor(private order:OrderService,private profile:profilesService,private active:ActivatedRoute,private cdr: ChangeDetectorRef  ){}

  orders:Product[]|null =null


  profiles:profiles[]|null =null

  ngOnInit(): void {


    this.profile.getProfile().subscribe(
      (res)=>{
        this.profiles = res
        this.cdr.detectChanges();
      }
    )

    this.order.getOrder().subscribe(
      (res)=>{
        this.orders = res
        console.log('order data',res)
        this.cdr.detectChanges();
      }
    )

    this.selectedId =  Number(this.active.snapshot.paramMap.get('id'))
    this.paymentType = this.active.snapshot.queryParamMap.get('payment_type') || '';

    console.log(this.selectedId)
    this.cdr.detectChanges();
    this.order.createOrder(this.selectedId, this.paymentType).subscribe(
      (res) => {
        console.log("successfully submitted", res);
      }
    );


}

remove(mobile:Product){

  console.log(mobile.order_id)

  this.order.removeOrder(mobile.order_id).subscribe(
    (res)=>{
      console.log('Order deleted successfully',res)
      // this.cdr.detectChanges();
    }

  )

}
}
