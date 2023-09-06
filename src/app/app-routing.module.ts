import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { SeekerComponent } from './seeker/seeker.component';
import { AuthguradService } from '../services/authgurad.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path:'',redirectTo:'/signIn',pathMatch:'full'},      //default page
  {path:'registration',component:RegistrationComponent},
  {path:'signIn', component:SignInComponent},
 
 
  {path:'recruiter',loadChildren: () => import('../app/recruiter/recruiter.module').then(mod => mod.RecruiterModule)},

  {path:'seeker',canActivate:[AuthguradService],component:SeekerComponent},

  {path:'**',component:PageNotFoundComponent}         //wildcard route
];

const routerOptions = {
  preloadingStrategy: PreloadAllModules,
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



