import { NgModule } from "@angular/core";
import { SeekerComponent } from "./seeker.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { SeekerRoutingModule } from "./seeker-routing.module";
import { ShowoneComponent } from './showone/showone.component';


@NgModule({

    declarations:[
        SeekerComponent,
        ShowoneComponent 
    ],

    imports:[
        CommonModule,
        MatCardModule,
        FormsModule,
        MatPaginatorModule,
        MatIconModule,
        MatTableModule,
        SeekerRoutingModule
    ]
   

})

export class SeekerModule{}