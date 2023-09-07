import { NgModule } from "@angular/core";
import { SeekerComponent } from "./seeker.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { SeekerRoutingModule } from "./seeker-routing.module";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from "../shared/shared.module";

@NgModule({

    declarations:[
        SeekerComponent
    ],

    imports:[
        CommonModule,
        MatCardModule,
        FormsModule,
        MatPaginatorModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        SeekerRoutingModule,
        MatButtonModule,
        SharedModule
    ]
   

})

export class SeekerModule{}