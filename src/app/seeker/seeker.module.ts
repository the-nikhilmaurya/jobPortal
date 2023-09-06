import { NgModule } from "@angular/core";
import { SeekerComponent } from "./seeker.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";

@NgModule({

    declarations:[
        SeekerComponent 
    ],

    imports:[
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatPaginatorModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,

    ]

})

export class SeekerModule{}