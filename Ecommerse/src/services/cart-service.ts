import { Injectable } from '@angular/core';
import { products } from './checkout';
import { cart } from '../models/cart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  
     constructor(private http:HttpClient ){}


  apiUrl = 'http://localhost:5000/cart'


    getCart():Observable<Product[]>{
      return this.http.get<Product[]>(this.apiUrl)
    }

    createCart(id:number):Observable<any>{
      return this.http.post(this.apiUrl,{ product_id: id })
    }

    removeCart(id:number):Observable<any>{
      return this.http.delete(`${this.apiUrl}/${id}`)
    }
  
}

