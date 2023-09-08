import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ServerService } from 'src/services/server.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiCalls: ServerService, private router: Router) { }

  registerForm !: FormGroup;
  hide: Boolean = true                // show password
  hideConfirm: Boolean = true       // show confirm password
  
  isValid!: Boolean
  error: Boolean = true
  showError:Boolean = false    // will turned true if user clicks submit button without entering field

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/)]],
      'confirmPassword': ['', [Validators.required, this.confirmPassword.bind(this)]],
      'usertype': ['', [Validators.required]],
    })
  }


  // custom validator to confirm whether password and confirm password are same or not
  confirmPassword(confpassword: FormControl): { [anyKey: string]: Boolean } | null {
    const password = this.registerForm?.get('password')?.value
    if (confpassword.value != password) {
      return { 'PasswordMatches': true }
    }
    return null
  }
  

  onFormSubmit() {
    if (!this.registerForm.valid) {
      this.showError = true
    }

    else {
      const { confirmPassword, ...userdata } = this.registerForm.value;   //userdata now will not have confimpassword
      
      this.isValid = false

      // this will confirm that email does not exists
      this.apiCalls.checkEmail(userdata.email).subscribe((res) => {
        this.isValid = res.isValid
        if (this.isValid) {
          this.apiCalls.addUser(userdata).subscribe((res) => {
            console.log('user added : ', res)
            this.registerForm.reset()
            this.router.navigate(['signIn'])
          })
        }else {
          this.error = false
          console.log('from else')
        }
        this.showError = true
      })
    }
  }

  goSignIn() {
    this.router.navigate(['signIn'])
  }
}
