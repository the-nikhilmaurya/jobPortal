import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AddJobsComponent } from '../add-jobs/add-jobs.component';
import { ServerService } from '../server.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  constructor(public dialog: MatDialog, private router:Router,private route:ActivatedRoute ,private apiCalls:ServerService) {}
  dataSource!: MatTableDataSource<any>
  @ViewChild('paginator') paginator!: MatPaginator;

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

  response: any[] = [];

  loadData(){
    this.apiCalls.showJobs(this.email).subscribe((res)=>{
      this.response = res
      console.log(res)
      console.log(this.response)
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
    
    })
  }
  ngOnInit(): void {
    // console.log('ngOnInt '+this.email)
    this.loadData()
  }

 
 
  displayedColumns: string[] = ['id', 'jobtitle', 'salary', 'seekers', 'actions'];
  
 
 
 
  

  viewJob(id:any){
    console.log(id)

  }
  deleteJob(id:any){
    console.log(id)
    this.apiCalls.deleteJob(id).subscribe((res)=>{
      this.response = res
      console.log(res)
    })

  }

  
  viewReponse:any
  exists:boolean = false
  onView(id:number){
    this.exists = true
    console.log(id)
    this.apiCalls.viewJob(id).subscribe((res)=>{
      this.viewReponse = res
    })
  }

  viewClose(){
    this.exists = false
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddJobsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}



