import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { LocalStorageService } from '../../../services/localstorage.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public auth:AuthService,protected router:Router,private shared:LocalStorageService){}
  title = 'jobPortal';
  showProfile = false
  name !:string
  email !:string
  ngOnInit(): void {
    this.name = this.shared.getName()
    this.email = this.shared.getEmail()   
  }
  

  showMenu(){
    if(this.auth.isAuthententicated()){
      this.showProfile = !this.showProfile
    }
  }
  backdrop(){
    this.showProfile = false
  }
  onLogout(){
    if(this.auth.isAuthententicated())
    {
      this.auth.logout()
      this.showProfile = false
      this.router.navigate(['signIn'])
    }

  }
}
