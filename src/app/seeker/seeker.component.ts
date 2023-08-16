import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit,AfterViewInit {
  
  constructor(private apiCalls:ServerService){}
  response: any[] = []; 
  displayedColumns: string[] = ['id', 'jobtitle', 'salary', 'location', 'actions'];

  // dataSource = new MatTableDataSource<any>(this.response);
  dataSource!: MatTableDataSource<any>
 
  @ViewChild('paginator') paginator!: MatPaginator;

  loadJobs(){
    this.apiCalls.showAllJobs().subscribe((res)=>{
      console.log(res)
      this.response = res
      this.dataSource = res
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
    })
  }

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

  ngOnInit() {
      this.loadJobs()
      // this.dataSource = new MatTableDataSource(this.response);
      // this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit(): void {
    // this.dataSource = new MatTableDataSource(this.response);
    // this.dataSource.paginator = this.paginator;
  }
  
 
pageSizes = [2,4,6];

  onApply(id:number){
    console.log(id)
    console.log(this.email+" from appy")
    const data = {email: this.email}
    this.apiCalls.applyJob(id,data).subscribe((res)=>{
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

}
