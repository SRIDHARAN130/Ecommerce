import { Component } from '@angular/core';
import { shareImports } from '../../sharedModules';
import { Authservice } from '../../services/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [shareImports],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(private auth:Authservice,private router:Router){}

logout(){
  this.auth.logout()
  this.router.navigate(['/login'])

}

cart(){
  this.router.navigate(['/carts'])
}
  
} 
