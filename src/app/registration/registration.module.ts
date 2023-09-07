import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./registration.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
  {path:'',component:RegistrationComponent},
]

@NgModule({
    declarations:[
        RegistrationComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        RouterModule.forChild(routes)
    ]
})

export class RegistrationModule {}