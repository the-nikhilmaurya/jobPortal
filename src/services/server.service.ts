import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/show'); 
  }

  addUser(formData:any):Observable<any>{
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      usertype: formData.usertype
    };
    console.log("data from add "+data)
    return this.http.post('http://localhost:3000/insert',data);
  }

  // check user credentials
  check(formData:any):Observable<any>{
    const data = {
      email: formData.email,
      password: formData.password,
    };
    console.log("data = "+data)
    return this.http.post('http://localhost:3000/signIn',data);
  }


  //add jobs 
    addjob(formData:any):Observable<any>{
      const data = {
        email: formData.email,
        jobtitle: formData.jobtitle,
        salary: formData.salary,
        location: formData.location,
        description: formData.description,
      }
      console.log("data = "+data)
      return this.http.post('http://localhost:3000/addjobs',data);
    }
  
    // show added jobs
    showJobs(email:string):Observable<any>{
        return this.http.get(`http://localhost:3000/show/${email}`);
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
     // apply for seekers
     viewJob(id:number):Observable<any>{
      console.log(id)
      return this.http.get(`http://localhost:3000/showone/${id}`);
    }


    // check email for registration
    checkEmail(email:string):Observable<any>{
      console.log(email)
      return this.http.get(`http://localhost:3000/checkemail/${email}`);
    }

    getseekers(id:number):Observable<any>{
      return this.http.get(`http://localhost:3000/getseeker/${id}`)
    }

 
}
