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

  constructor(private router: Router, private route: ActivatedRoute, private apiCalls: ServerService, private auth: AuthService) { }

  // @ViewChild('formDetails') signInform! :NgForm       //example of definite assertion
  signInForm!: FormGroup
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }


  hide = true
  error: Boolean = true
  isValid!: Boolean
  showError = false //will set the error on falsely clicking submit
  SignIn() {

    if (!this.signInForm.valid) {
      console.log('sing clicked');
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
        // userdata['usertype'] = data.usertype

        if (this.isValid == true)  // this will redirect to next page and save the users data in local storage
        {
          userdata['usertype'] = data.usertype
          localStorage.setItem("userdata", JSON.stringify(userdata))
          if (userdata.usertype === 'recruiter') {
            this.router.navigate(['recruiter'])
          }
          else {
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
