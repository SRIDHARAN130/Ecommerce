import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Checkout, products } from '../../services/checkout';
import { shareImports } from '../../sharedModules';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../services/orders';

@Component({
  selector: 'app-check-out',
  imports: [shareImports],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css'
})
export class CheckOut implements OnInit {

  see:boolean = false

  selectedId:number = 0

  constructor(private check:Checkout,private active:ActivatedRoute ,private orders:Order){}

  mobiles:products[] = [
    // {
    //   id:0,
    //   title:'',
    //   price:0,
    //   image:''
    // }
  ]

  ngOnInit(): void {

      // this.selectedId =  Number(this.active.snapshot.queryParamMap.get('id'))

      // console.log(this.selectedId)

      // this.check.product$.subscribe((res) => {
      //   const filtered = res.filter(p => p.id === this.selectedId);
      //   console.log('Filtered:', filtered);
    
      //   this.mobiles = filtered;
    
      //   // Force update UI
      //   this.cdr.detectChanges();
      // const filtered  = this.check.getProduct(this.selectedId)

      //   this.mobiles = filtered;

}

show(){

  this.see = true

  console.log('this.selectedId')


  this.selectedId =  Number(this.active.snapshot.paramMap.get('id'))

  console.log(this.selectedId)

  const filtered  = this.check.getProduct(this.selectedId)

  this.mobiles = filtered;
}

order(mobile:products){
     this.orders.sendProduct(mobile)
}

}

