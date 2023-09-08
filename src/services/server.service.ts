import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ViewSingleJob, addSingleJob } from 'src/app/recruiter/recruiter.model';
import { addUser } from 'src/app/registration/registration.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/show'); 
  }

  addUser(formData:addUser):Observable<any>{
    return this.http.post('http://localhost:3000/insert',formData);
  }

  // check user credentials
  check(formData:{email:string,password:string}):Observable<any>{
    return this.http.post('http://localhost:3000/signIn',formData);
  }


  //add job
    addjob(formData:addSingleJob):Observable<addSingleJob>{  
      return this.http.post<addSingleJob>('http://localhost:3000/addjobs',formData);
    }
  
    // show added jobs
    showJobs(email:string):Observable<ViewSingleJob[]>{
        return this.http.get <ViewSingleJob[]> (`http://localhost:3000/show/${email}`);
    }

    // delete job
    deleteJob(id:any):Observable<any>{
      return this.http.delete(`http://localhost:3000/deletejob/${id}`);
    }

    showAllJobs():Observable<any>{
      return this.http.get(`http://localhost:3000/show`);
    }

    // apply for seekers
    applyJob(id:number,data:any):Observable<any>{
      return this.http.put(`http://localhost:3000/update/${id}`,data);
    }

    // view particular jobs
    viewJob(id:number):Observable<any>{
      return this.http.get(`http://localhost:3000/showone/${id}`);
    }


    // check email for registration
    checkEmail(email:string):Observable<any>{
      return this.http.get(`http://localhost:3000/checkemail/${email}`);
    }

    getseekers(id:number):Observable<any>{
      return this.http.get(`http://localhost:3000/getseeker/${id}`)
    }

    getprofile(email:string):Observable<{name:string,email:string}>{
      return this.http.get<{name:string,email:string}>(`http://localhost:3000/profile/${email}`)
    }
 
}
