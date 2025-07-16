import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
// import {login} form 'src/models/login'

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  constructor(private http:HttpClient ){}

  tokenKey = 'auth-token'

  apiUrl = 'POST https://fakestoreapi.com/auth/login'

  
  

  login(user:{email:string,password:string}):Observable<any>{
        return this.http.post<{token:string}>(this.apiUrl,user).pipe(
          map((res)=>{
              localStorage.setItem('tokenKey',res.token)
              console.log('token :',res.token)
              return of(res.token)
        }))
  }

  isAuthenticated(): boolean{
      return !!localStorage.getItem(this.tokenKey)
  }

  getToken(): string|null{
    return localStorage.getItem(this.tokenKey)
  }

  logout(){
    return localStorage.removeItem(this.tokenKey)
  }
}
