import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/services/server.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  constructor(private apiCalls: ServerService, private router: Router, private route: ActivatedRoute) {

  }


  @ViewChild('formDetails') signUpform!: NgForm       //example of definite assertion
  hide = true
  hideConfirm = true
  email = ""
  isValid!: Boolean
  error: Boolean = true
 



  registerForm() {
    this.isValid = false
    console.log(this.signUpform)
    const userdata = this.signUpform.value;
    console.log(userdata)
    this.apiCalls.checkEmail(this.email).subscribe((res) => {
      this.isValid = res.isValid
      console.log('isValid: ', this.isValid)

      if (this.isValid == true) {
        console.log('from if')
        this.apiCalls.addUser(userdata).subscribe((res) => {
          console.log('user added' + res)
        })
        this.signUpform.reset()
        this.router.navigate(['signIn'])
      }
      else {
        this.error = false
        console.log('from else')
      }

    })

  }

  goSignIn() {
    this.router.navigate(['signIn'])
  }
}
