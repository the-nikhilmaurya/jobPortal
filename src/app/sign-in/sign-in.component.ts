import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private router:Router,private route:ActivatedRoute,private apiCalls: ServerService,private auth:AuthService){}

  @ViewChild('formDetails') signInform! :NgForm       //example of definite assertion

  email!:string
  hide = true
  error:Boolean = true
  isValid!:Boolean
  SignIn(){
    this.isValid = false
    console.log(this.signInform.value)
    const userdata = this.signInform.value
    console.log('userdata '+userdata)
    this.apiCalls.check(userdata).subscribe((res)=>{
      // console.log('res '+res)
      this.isValid = res.isValid
    if(this.isValid == true)
    {
      localStorage.setItem("userdata",JSON.stringify(userdata))
      console.log('if '+this.isValid)
      if(userdata.usertype === 'recruiter'){
        console.log('from recruiter')
        this.auth.login()
        this.router.navigate(['recruiter'])
      }
      else{
        this.auth.login()
        console.log('from seeker')
        this.router.navigate(['seeker'])
      }
    }else{
      this.error = false
      console.log('else '+this.isValid)
    }
  })
  }

  goRegister(){
    this.router.navigate(['registration'])
  }
}
