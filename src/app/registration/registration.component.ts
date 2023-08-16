import { Component, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private apiCalls:ServerService,private router:Router,private route:ActivatedRoute){

  }

  
  @ViewChild('formDetails') signUpform! :NgForm       //example of definite assertion
hide = true
hideConfirm = true
 email!:string
//  emailExists!:any
  registerForm(){
    console.log(this.signUpform)
    const userdata = this.signUpform.value;
    console.log(userdata)
    

    this.apiCalls.addUser(userdata).subscribe((res)=>{
      console.log('user added'+res)
    })
    this.signUpform.reset()
    this.router.navigate(['signIn'])
  }

  goSignIn(){
    this.router.navigate(['signIn'])
  }
}
