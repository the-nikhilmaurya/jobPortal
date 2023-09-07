import {  Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ServerService } from 'src/services/server.service';
import { AlertComponent } from './alert/alert.component';
import { ShowoneComponent } from '../shared/showone/showone.component';
import { ViewSingleJob } from './recruiter.model'  // interface


@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  constructor(public dialog: MatDialog, private router:Router,private route:ActivatedRoute ,private apiCalls:ServerService) {
    
  }
  dataSource!: MatTableDataSource<any>
  @ViewChild('paginator') paginator!: MatPaginator;

  getEmail(){
    const storedData = localStorage.getItem('userdata');
    if (storedData !== null) {
      let data: { email: string, password: string, usertype: string } = JSON.parse(storedData);
      // console.log("Data from local storage:", data.email);
      return data.email
    } else {
      // console.log("No data found in local storage");
      return ""
    }
  }
  email = this.getEmail()

  response: ViewSingleJob[] = [];

  // this will the call the api will get the jobs created by specific recruiter
  loadData(){
    this.apiCalls.showJobs(this.email).subscribe((res)=>{
      this.response = res
      // console.log(this.response);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
    
    })
  }

  ngOnInit(): void {
    this.loadData()
  }


  // table columns definitions
  displayedColumns: string[] = ['id', 'jobtitle', 'salary', 'seekers', 'actions'];


  // single job view at a time and seekers list
  onView(id:number){
    let ViewSingleJob !: ViewSingleJob
    this.apiCalls.viewJob(id).subscribe((res)=>{
      ViewSingleJob = res
      // this.dialog.open(ViewjobComponent,{data:ViewSingleJob})
      this.dialog.open(ShowoneComponent,{data:ViewSingleJob})
    })
  }

  


  // add jobs dialog box
  openDialogAddjob() {
    const ref =   this.dialog.open(AddJobsComponent);
    ref.afterClosed().subscribe(()=>{
      this.loadData()
    })
  }

  // on clicking on deleting jobs
  deleteJob(id:number,jobtitle:string){
    this.OpenDialogAlert(id,jobtitle)
  }

  OpenDialogAlert(id: number,jobtitle: string){
    const alertDialog = this.dialog.open(AlertComponent,
      { data:{id,jobtitle},
        width: '30vw',
        height: '30vh',
      })
    alertDialog.afterClosed().subscribe((result)=>{
      if(result === 'yes' ){
        this.apiCalls.deleteJob(id).subscribe((res)=>{
            this.response = res
            this.loadData()
          })
      }      
    })
  }


}




