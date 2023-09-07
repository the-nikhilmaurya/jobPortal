import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthguradService } from "src/services/authgurad.service";
import { RecruiterComponent } from "./recruiter.component";


const routes:Routes =[
        // {path:'',component:RecruiterComponent},
        { path:'', canActivate:[AuthguradService], component:RecruiterComponent }                
      
]   


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecruiterRouting{

}