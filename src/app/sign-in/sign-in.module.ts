import { NgModule } from "@angular/core";
import { SignInComponent } from "./sign-in.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {  MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes = [
    {path:'', component:SignInComponent},
]

@NgModule({
    declarations:[
        SignInComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        RouterModule.forChild(routes)
    ],
    exports:[
        SignInComponent,
        RouterModule
    ]

})

export class SignInModule{

}