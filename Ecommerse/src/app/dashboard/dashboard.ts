import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { shareImports } from '../../sharedModules';
import { Authservice } from '../../services/authservice';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { profilesService } from '../../services/profilesService';
import { profiles } from '../../models/profiles';

@Component({
  selector: 'app-dashboard',
  imports: [...shareImports],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  id!:number


  constructor(private auth:Authservice,private router:Router,private profiles:profilesService,private cdr: ChangeDetectorRef ){}


  ngOnInit(): void {

       const token = localStorage.getItem('tokenKey')

       if(token){
        const tokens:any = jwtDecode(token)   
        console.log('sri id',tokens);
          this.id = tokens.userId
       }

           this.profiles.getProfile().subscribe(
            (res)=>{
              console.log(res)
                 this.user = res
                 this.cdr.detectChanges();
            }
           )
  }

  user:profiles[]|null = null


logout(){
  this.auth.logout()
  this.router.navigate(['/login'])

}

cart(){
  this.router.navigate(['/carts'])
}

profile(){
  this.router.navigate(['/profile'])
}
  
} 
