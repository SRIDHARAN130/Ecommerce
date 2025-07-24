import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from './checkout';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http:HttpClient ){}

  // apiUrl = 'http://localhost:5000/product'

  private apiUrl = environment.apiUrl;



    getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(`${this.apiUrl}/product`)
    }

    getProductsById(id:number):Observable<Product[]>{
      return this.http.get<Product[]>(`${this.apiUrl}/product/${id}`)
    }
  
}


