import { Component, ViewChild } from '@angular/core';
// import { ServerService } from '../server.service';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/services/server.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  
  constructor(private apiCalls:ServerService){}

  
 
 @ViewChild('addJobForm') addForm! :NgForm       //example of definite assertion
//  email:any = "hello@"
 error = false

 getEmail(){
    const storedData = localStorage.getItem('userdata');
    if (storedData !== null) {
      let data: { email: string, password: string, usertype: string } = JSON.parse(storedData);
      console.log("Data from local storage:", data.email);
      return data.email
    } else {
      console.log("No data found in local storage");
      return ""
    }
  }
  email = this.getEmail()

  addJob(){    
    if (this.email != "") {
      console.log(this.addForm.value) 
      const userdata = this.addForm.value;
      userdata['email'] = this.email
      console.log('email form local storage '+userdata.email)
      this.apiCalls.addjob(userdata).subscribe((res)=>{
        console.log(" from addjob "+res)
      })

    } else {
      this.error = true
      console.log("No email ");
    }  
 }

}
