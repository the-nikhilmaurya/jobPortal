import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

import { ServerService } from 'src/services/server.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private apiCalls: ServerService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      'email' : [null,[Validators.required, Validators.email]],
      'password' : [null,[Validators.required]]
    })
  }

  signInForm!: FormGroup
  hide = true
  error: Boolean = true   // will if
  isValid!: Boolean
  showError = false //will set the error on falsely clicking submit
  SignIn() {

    if (!this.signInForm.valid) {
      this.showError = true
      return
    }
    else {
      console.log(this.signInForm)
      this.isValid = false
      let data!: any
      const userdata = this.signInForm.value

      // api call which checks whether user exists
      this.apiCalls.check(userdata).subscribe((res) => {
        this.isValid = res.isValid
        data = res.data
  
        if (this.isValid == true)  // this will redirect to next page and save the users data in local storage
        {
          localStorage.setItem("userdata", JSON.stringify(data))
          if (data.usertype === 'recruiter') {
            this.router.navigate(['recruiter'])
          }
          if (data.usertype === 'seeker')  
          {
            this.router.navigate(['seeker'])
          }
        } else {
          this.error = false
        }
        this.showError = false
      })
    }
  }

  goRegister() {
    this.router.navigate(['registration'])
  }
}
