import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loginform } from '../Interfaces/loginform';
import { RegisterForm } from '../Interfaces/register-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken:any;

  constructor(private _HttpClient : HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') != null) {
      this.userToken = localStorage.getItem('token')
    } 
   }

  register(registerForm:RegisterForm): Observable<any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signup', registerForm)
  }

  login(Loginform:Loginform): Observable<any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signin', Loginform)
  }

  logout(){
    localStorage.removeItem("token")
    this.userToken=""
    this._Router.navigate(['/login'])
  }
}
