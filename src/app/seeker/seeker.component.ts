import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServerService } from 'src/services/server.service';
import { ShowoneComponent } from '../shared/showone/showone.component';
import { jobdata } from './seeker.model';
import { LocalStorageService } from '../../services/localstorage.services';



@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})

export class SeekerComponent implements OnInit {
  
  constructor(private apiCalls:ServerService,private dialog:MatDialog,private shared:LocalStorageService){}
  response: jobdata[] = []; 
  displayedColumns: string[] = ['id', 'jobtitle', 'salary', 'location', 'View','Apply'];
  

  // dataSource = new MatTableDataSource<any>(this.response);
  dataSource!: MatTableDataSource<jobdata>
 
  @ViewChild('paginator') paginator!: MatPaginator;

  loadJobs(){
    this.apiCalls.showAllJobs().subscribe((res)=>{
     
      this.response = res 
      this.dataSource = res
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
    })
    
  }


  email = this.shared.getEmail() 

  ngOnInit() {
      this.loadJobs()
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

    })
  

  }

  viewReponse !:jobdata
  onView(id:number){
    this.apiCalls.viewJob(id).subscribe((res)=>{
      this.viewReponse = res
          this.dialog.open(ShowoneComponent,{data:this.viewReponse,});
    })
  }


  showHintMess() {
    this.showHint = true;
    setTimeout(() => {
      this.showHint = false;
    }, 5000); 
  }
}
