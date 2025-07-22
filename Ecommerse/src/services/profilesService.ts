import { Injectable } from '@angular/core';
import { profiles } from '../models/profiles';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class profilesService {



  constructor(private http:HttpClient ){}

  apiUrl = 'http://localhost:5000/profile'

   postprofile(user:profiles):Observable<profiles[]>{

    console.log('Sending profile:', user);
    console.log('Token:', localStorage.getItem('tokenKey'));
  
          return this.http.post<profiles[]>(this.apiUrl,user)
    }

    getProfile():Observable<profiles[]>{
      return this.http.get<profiles[]>(this.apiUrl)
    }
  
}

