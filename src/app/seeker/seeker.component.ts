import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServerService } from 'src/services/server.service';




@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {
  
  constructor(private apiCalls:ServerService,private dialog:MatDialog){}
  response: any[] = []; 
  displayedColumns: string[] = ['id', 'jobtitle', 'salary', 'location', 'View','Apply'];

  // dataSource = new MatTableDataSource<any>(this.response);
  dataSource!: MatTableDataSource<any>
 
  @ViewChild('paginator') paginator!: MatPaginator;

  loadJobs(){
    this.apiCalls.showAllJobs().subscribe((res)=>{
      // console.log(res)
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
      // console.log("Data from local storage:", data.email);
      return data.email
    } else {
      // console.log("No data found in local storage");
      return ""
    }
  }
  email = this.getEmail()

  ngOnInit() {
      this.loadJobs()
      // this.dataSource = new MatTableDataSource(this.response);
      // this.dataSource.paginator = this.paginator;
  }
  
  
 
pageSizes = [2,4,6];
array :string[] =[]
hint=""
showHint = false
  onApply(id:number){
     this.apiCalls.getseekers(id).subscribe((res)=>{
      const data = {email: this.email}
      // this.array = res.seekers
      console.log(res)
      if(res.seekers != null)
      {
        this.array = res.seekers
            console.log(this.array,"  ",this.array.indexOf(this.email))
            if(this.array.indexOf(this.email)>=0){
              this.hint = `${id} you have already applied`
              this.showHintMess();
            console.log('from if you can not apply' )
          }else{
            console.log('from else you can apply')
            this.apiCalls.applyJob(id,data).subscribe((res)=>{
              console.log('applied success full')
              this.hint = `${id} your application has been subitted`
              this.showHintMess();
            })
        }
      }else{
        console.log('seekers null. you can apply')
        this.apiCalls.applyJob(id,data).subscribe((res)=>{
            console.log('applied success full')
            this.hint = `${id} your application has been subitted`
            this.showHintMess();
          })
            
      }
      // console.log(this.array,"  ",this.array.indexOf(this.email))

    })
    // console.log(id)
    // console.log(this.email+" from appy")
    // const data = {email: this.email}
    // this.apiCalls.applyJob(id,data).subscribe((res)=>{
    //   // console.log(res)
    // })

  }
  viewReponse:any
  exists:boolean = false
  onView(id:number){
    this.exists = true
    // console.log(id)
    this.apiCalls.viewJob(id).subscribe((res)=>{
      this.viewReponse = res
    })
  }

  viewClose(){
    this.exists = false
  }

  showHintMess() {
    this.showHint = true;
    setTimeout(() => {
      this.showHint = false;
    }, 5000); 
  }

}
