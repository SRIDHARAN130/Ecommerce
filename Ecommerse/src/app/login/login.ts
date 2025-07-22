import { Component, inject, NgZone, OnInit } from '@angular/core';
import { shareImports } from '../../sharedModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authservice } from '../../services/authservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  imports: [...shareImports],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
     
  formValues!:FormGroup

  private _snackBar = inject(MatSnackBar);

  message:string = "Invalid Email Or Password"

  action:string = "OK"

  constructor(private fb:FormBuilder,private zone: NgZone,private router:Router,private auth:Authservice){}

  ngOnInit(): void {
      this.formValues = this.fb.group({
        email:['admin@gmail.com',Validators.required],
        password:['123',Validators.required]
      })

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  submit(){
    console.log(this.formValues.value)

    const {email,password} = this.formValues.value

    this.auth.login( {email,password} ).subscribe({
      next:(token)=>{     
        console.log('Login successful, token:', token);
      console.log(this.auth.isAuthenticated())
   
        this.router.navigate(['/dashboard']);

      
      },
      error:err=>{

        console.log('error',err.message)

        this.openSnackBar(this.message,this.action)
      }
    })

  }

}
