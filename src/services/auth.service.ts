import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  

  logout(){
    localStorage.removeItem('userdata')
    this.router.navigate(['/'])
  }

  isAuthententicated(){
    const storedData = localStorage.getItem('userdata');
    if (storedData !== null) {
      let data: { email: string, password: string, usertype: string } = JSON.parse(storedData);
      // console.log("Data from local storage:", data);
      return true
    } else {
      return false
    }
   
  }
}
