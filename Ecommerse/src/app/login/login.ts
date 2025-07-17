import { Component, NgZone, OnInit } from '@angular/core';
import { shareImports } from '../../sharedModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authservice } from '../../services/authservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [shareImports],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
     
  formValues!:FormGroup

  constructor(private fb:FormBuilder,private zone: NgZone,private router:Router,private auth:Authservice){}

  ngOnInit(): void {
      this.formValues = this.fb.group({
        name:['admin',Validators.required],
        password:['123',Validators.required]
      })

  }

  submit(){
    console.log(this.formValues.value)

    const {name,password} = this.formValues.value

    this.auth.login( {name,password} ).subscribe({
      next:(token)=>{     
        console.log('Login successful, token:', token);
      console.log(this.auth.isAuthenticated())
      this.zone.run(() => {
        this.router.navigate(['/dashboard']);
      });    
      },
      error:err=>{
        console.log('error',err.message)
      }
    })

  }

}
