import { Injectable } from '@angular/core';
import { products } from './checkout';
import { cart } from '../models/cart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  
     constructor(private http:HttpClient ){}


  // apiUrl = 'http://localhost:5000/cart'

    private apiUrl = environment.apiUrl;
  


    getCart():Observable<Product[]>{
      return this.http.get<Product[]>(`${this.apiUrl}/cart`)
    }

    createCart(id:number):Observable<any>{
      return this.http.post(`${this.apiUrl}/cart`,{ product_id: id })
    }

    removeCart(id:number):Observable<any>{
      return this.http.delete(`${this.apiUrl}/cart/${id}`)
    }
  
}

