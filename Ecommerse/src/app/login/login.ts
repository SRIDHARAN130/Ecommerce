import { Component, OnInit } from '@angular/core';
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

  constructor(private fb:FormBuilder,private router:Router,private auth:Authservice){}

  ngOnInit(): void {
      this.formValues = this.fb.group({
        email:['mor_2314',Validators.required],
        password:['83r5^_',Validators.required]
      })
  }

  submit(){
    console.log(this.formValues.value)

    const {email,password} = this.formValues.value

    this.auth.login( {email,password} ).subscribe({
      next:(res)=>{
        if(res.token){
            this.router.navigate(['/dashboard'])
        }
      },
      error:err=>{
        console.log('error',err.message)
      }
    })

  }

}
