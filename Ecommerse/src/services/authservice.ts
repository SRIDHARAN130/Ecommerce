import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../environments/environment.prod';
// import {login} form 'src/models/login'

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  constructor(private http:HttpClient ){}

  tokenKey = 'auth-token'

  // apiUrl = 'https://ecommerse-backend-dbno.onrender.com/user/login'

  private apiUrl = environment.apiUrl;

  apiUrl2 = 'https://ecommerse-backend-dbno.onrender.com/user/register'



  login(user:{email:string,password:string}):Observable<any>{

        return this.http.post<{token:string}>(`${this.apiUrl}/user/login`,user).pipe(
          map((res)=>{
              localStorage.setItem('tokenKey',res.token)
              console.log('token :',res.token)
              return res
        }),
       )
  }

  register(user:{email:string,password:string}):Observable<any>{

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl2,user)
}

 
  

  isAuthenticated(): boolean{
      return !!localStorage.getItem('tokenKey')
  }

  getToken(): string|null{
    return localStorage.getItem('tokenKey')
  }

  logout(){
    return localStorage.removeItem('tokenKey')
  }
}



 // login(user: { name: string; password: string }): Observable<any> {
  //   if (user.name === 'admin' && user.password === '123') {
  //     const fakeToken = 'hardcoded-jwt-token';
  //     localStorage.setItem('tokenKey', fakeToken);
  //     console.log('token:', fakeToken);
  //     return of(fakeToken); // success
  //   } else {
  //     return throwError(() => new Error('Invalid credentials')); // error
  //   }
  // }