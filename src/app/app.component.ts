import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  constructor(private authService:AuthService){

  }

  showHeader():boolean{
    if(this.authService.isAuthententicated()){
      return true
    }
    return false
  }

}
