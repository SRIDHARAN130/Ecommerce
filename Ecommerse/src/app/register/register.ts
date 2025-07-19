import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../../services/authservice';
import { shareImports } from '../../sharedModules';

@Component({
  selector: 'app-register',
  imports: [shareImports],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  formValues!:FormGroup

  constructor(private fb:FormBuilder,private router:Router,private auth:Authservice){}

  ngOnInit(): void {
      this.formValues = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required] 
      })

  }

  // submit(){
  //   console.log(this.formValues.value)

  //   const {email,password} = this.formValues.value

  //   this.auth.register({email,password})

  // }

  submit() {
    if (this.formValues.valid) {
      const { email, password } = this.formValues.value;
  
      this.auth.register({ email, password }).subscribe({
        next: (res) => {
          console.log('Register Success:', res);
          this.router.navigate(['/login']); // Optional navigation
        },
        error: (err) => {
          console.error('Register Error:', err);
        }
      });
    }
  }
  

}
