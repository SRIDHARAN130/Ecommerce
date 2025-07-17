import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
// import {login} form 'src/models/login'

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  constructor(private http:HttpClient ){}

  tokenKey = 'auth-token'

  // apiUrl = 'https://dummyjson.com/auth/login'


  // login(user:{username:string,password:string}):Observable<any>{

  //       return this.http.post<{token:string}>(this.apiUrl,user).pipe(
  //         map((res)=>{
  //             localStorage.setItem('tokenKey',res.token)
  //             console.log('token :',res.token)
  //             return res
  //       }),
  //      )
  // }

  login(user: { name: string; password: string }): Observable<any> {
    if (user.name === 'admin' && user.password === '123') {
      const fakeToken = 'hardcoded-jwt-token';
      localStorage.setItem('tokenKey', fakeToken);
      console.log('token:', fakeToken);
      return of(fakeToken); // success
    } else {
      return throwError(() => new Error('Invalid credentials')); // error
    }
  }
  

  isAuthenticated(): boolean{
      return !!localStorage.getItem('tokenKey')
  }

  getToken(): string|null{
    return localStorage.getItem(this.tokenKey)
  }

  logout(){
    return localStorage.removeItem('tokenKey')
  }
}
