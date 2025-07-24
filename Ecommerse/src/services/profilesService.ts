import { Injectable } from '@angular/core';
import { profiles } from '../models/profiles';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class profilesService {



  constructor(private http:HttpClient ){}

  // apiUrl = 'http://localhost:5000/profile'

  private apiUrl = environment.apiUrl;


   postprofile(user:profiles):Observable<profiles[]>{

    console.log('Sending profile:', user);
    console.log('Token:', localStorage.getItem('tokenKey'));
  
          return this.http.post<profiles[]>(`${this.apiUrl}/profile`,user)
    }

    getProfile():Observable<profiles[]>{
      return this.http.get<profiles[]>(`${this.apiUrl}/profile`)
    }
  
}

