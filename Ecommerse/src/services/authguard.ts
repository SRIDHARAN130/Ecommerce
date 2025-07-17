import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Authservice } from './authservice';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(private auth:Authservice){}


  canActivate() :boolean {
    const isAuth = this.auth.isAuthenticated();
    console.log('Guard: isAuthenticated =', isAuth);
    return isAuth;
  //  if(this.auth.isAuthenticated()){
  //   console.log(this.auth.isAuthenticated())
  //   return true
  //  }
  //  else{
  //   return false
  //  }
  }
  
}
