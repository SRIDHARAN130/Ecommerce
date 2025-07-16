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
        name:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(8)]]
      })
  }

  submit(){
    console.log(this.formValues.value)

    const {name,password} = this.formValues.value

    this.auth.login( {name,password} ).subscribe({
      next:(res)=>{
        if(res.token){
            this.router.navigate(['/dashboard'])
        }
      }
    })

  }

}
