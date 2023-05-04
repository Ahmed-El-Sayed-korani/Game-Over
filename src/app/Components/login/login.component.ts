import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import * as $ from "jquery";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  constructor(private _AuthService: AuthService , private _Router : Router){
    if (localStorage.getItem('token') != null) {
      _Router.navigate(['/home'])
    } 
  }

  loginForm: FormGroup =  new FormGroup ({

   "email" : new FormControl(null, [Validators.required,Validators.email]),
   "password" : new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z]\w{3,14}$/)]),
 })

 login() {

   this._AuthService.login(this.loginForm.value).subscribe({
     next:(response) => {
       if (response.message == "success") {
        localStorage.setItem("token",response.token)
        this._AuthService.userToken = response.token
        this._Router.navigate(['/home'])
       }
       error: (err: any)=> {
         console.log(err.error.errors.msg);
       }
     }
   })
 }

 alert(){
alert("اعمل اكونت جديد ههههه ")
 }

 ngOnInit() {

  $('.btn').on("click",function () {
    $('.loading-icon').removeClass('hide'),
    $('.btn').attr("disabled");
    $('.txt').text(" ");
     })
    
  }


}
