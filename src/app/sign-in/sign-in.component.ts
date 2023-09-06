import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ServerService } from '../server.service';
import { AuthService } from '../../services/auth.service';
import { ServerService } from 'src/services/server.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private snackBar: MatSnackBar ,private router:Router,private route:ActivatedRoute,private apiCalls: ServerService,private auth:AuthService){}

  // @ViewChild('formDetails') signInform! :NgForm       //example of definite assertion
  signInForm!: FormGroup
  ngOnInit(): void {
      this.signInForm = new FormGroup({
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required])
      })
  }

  
  hide = true
  error:Boolean = true
  isValid!:Boolean
  
  SignIn(){
    console.log(this.signInForm)

    this.isValid = false
    let data!:any
    const userdata = this.signInForm.value

    // this subscrie to an api call which checks whether user exists
    this.apiCalls.check(userdata).subscribe((res)=>{
      this.isValid = res.isValid
      data = res.data
      userdata['usertype'] = data.usertype
    if(this.isValid == true)
    {
      localStorage.setItem("userdata",JSON.stringify(userdata))
      // console.log('if '+this.isValid)
      if(userdata.usertype === 'recruiter'){
        console.log('from recruiter')
        this.auth.login()
        console.log('form sign-in before navigating to recruiter')
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
