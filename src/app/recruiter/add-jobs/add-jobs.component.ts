import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from 'src/services/localstorage.services';
import { ServerService } from 'src/services/server.service';



@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent  {
  
  constructor(private apiCalls:ServerService,private shared : LocalStorageService){}
 
 @ViewChild('addJobForm') addForm! :NgForm   
 error = false

  email = this.shared.getEmail()

  addJob(){    
    if (this.email != "") {
      const userdata = this.addForm.value;
      userdata['email'] = this.email
      this.apiCalls.addjob(userdata).subscribe((res)=>{
        console.log(" from addjob "+res)
      })
    } else {
      this.error = true
    }  
 }
}
