import { Injectable } from '@angular/core';
import { products } from './checkout';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  

  constructor(private http:HttpClient ){}


  // apiUrl = 'http://localhost:5000/order'

  private apiUrl = environment.apiUrl;



    getOrder():Observable<Product[]>{
      return this.http.get<Product[]>(`${this.apiUrl}/order`)
    }

    createOrder(id: number, payment_type: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/order`, {
        product_id: id,
        payment_type: payment_type
      });
    }
    

    removeOrder(id:number):Observable<any>{
      return this.http.delete(`${this.apiUrl}/order/${id}`)
    }
}

