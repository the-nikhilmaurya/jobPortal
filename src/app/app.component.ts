import { Component } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(public auth:AuthService,protected router:Router){}
  title = 'jobPortal';
 
  onLogout(){
  //  this.isLogged = this.auth.isAuthententicated()
    // console.log(this.isLogged,"  from onlogout")
    if(this.auth.isAuthententicated())
    {
      this.auth.logout()
      this.router.navigate(['signIn'])
      
    }

  }
}
