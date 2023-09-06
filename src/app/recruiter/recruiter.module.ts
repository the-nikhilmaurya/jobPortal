import { NgModule } from "@angular/core";
import { RecruiterComponent } from "./recruiter.component";
import { AddJobsComponent } from "./add-jobs/add-jobs.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from "@angular/common";
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from "@angular/forms";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from "@angular/material/icon";
import {MatTableModule} from '@angular/material/table';
import { RecruiterRouting } from "./recruiter-routing.module";




@NgModule({
    declarations:[
        RecruiterComponent,
        AddJobsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatIconModule,
        MatTableModule,
        RecruiterRouting   
    ]
})

export class RecruiterModule{

}