import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isLogged = false;

  login(){
    this.isLogged = true;
  }

  logout(){
    localStorage.removeItem('userdata')
    this.isLogged = false;
    this.router.navigate(['/'])
  }

  isAuthententicated(){
    return this.isLogged
  }
}
