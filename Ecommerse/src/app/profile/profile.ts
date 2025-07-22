import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../../services/authservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profilesService } from '../../services/profilesService';
import { shareImports } from '../../sharedModules';
import { profiles } from '../../models/profiles';

@Component({
  selector: 'app-profile',
  imports: [...shareImports],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
     
  formValues!:FormGroup

  user:profiles[]|null = null

  constructor(private fb:FormBuilder,private router:Router,private profile:profilesService,private cdr: ChangeDetectorRef ){}

  ngOnInit(): void {
      this.formValues = this.fb.group({
        name:['',Validators.required],
        address:['',Validators.required],
        mobile:['',Validators.required]
      })

      this.profile.getProfile().subscribe(
        (res)=>{
          console.log(res)
             this.user = res
             this.cdr.detectChanges();
        }
       )
  }

  submit(){
    console.log(this.formValues.value)

    const {name,address,mobile} = this.formValues.value

    this.profile.postprofile(  {name,address,mobile} ).subscribe({
      next: (res) => {
        console.log('Profile saved successfully', res);
      },
      error: (err) => {
        console.error('Error saving profile', err);
      }
    });

  }
}
