import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import * as $ from "jquery";
@Component({
  selector: 'app-join-free',
  templateUrl: './join-free.component.html',
  styleUrls: ['./join-free.component.css']
})
export class JoinFreeComponent implements OnInit {
  constructor(private _AuthService: AuthService , private _Router : Router){
    if (localStorage.getItem('token') != null) {
      _Router.navigate(['/home'])
    } 
  }

  registerForm: FormGroup =  new FormGroup ({
   "first_name" : new FormControl(null, [Validators.required,]),
   "last_name" : new FormControl(null, [Validators.required,]),
   "email" : new FormControl(null, [Validators.required,Validators.email]),
   "password" : new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z]\w{3,14}$/)]),
   "age" : new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]+$/)]),
 })

 register() {

   this._AuthService.register(this.registerForm.value).subscribe({
     next:(response) => {
       if (response.message == "success") {
         this._Router.navigate(['/login'])
       }
       error: (err: any)=> {
         console.log(err.error.errors.msg);

       }
       
     }
     

   })
 }


 ngOnInit() {

  $('.btn').on("click",function () {
    $('.loading-icon').removeClass('hide'),
    $('.btn').attr("disabled");
    $('.txt').text(" ");
     })
    
  }

}
