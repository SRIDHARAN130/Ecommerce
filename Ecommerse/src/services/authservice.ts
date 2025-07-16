import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
// import {login} form 'src/models/login'

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  constructor(private http:HttpClient ){}

  tokenKey = 'auth-token'

  apiUrl = 'https://dummyjson.com/auth/login'


  login(user:{username:string,password:string}):Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

        return this.http.post<{token:string}>(this.apiUrl,user).pipe(
          map((res)=>{
              localStorage.setItem('tokenKey',res.token)
              console.log('token :',res.token)
              return res
        }),
       )
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
