import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthguradService } from "src/services/authgurad.service";
import { SeekerComponent } from "./seeker.component";

const routes: Routes = [
    {path:'',canActivate:[AuthguradService],component:SeekerComponent}
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class SeekerRoutingModule{}