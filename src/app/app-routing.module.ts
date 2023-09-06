import { NgModule } from '@angular/core';
import {  PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';





const routes: Routes = [
  {path:'',redirectTo:'/signIn',pathMatch:'full'},      //default page
  {path:'registration',component:RegistrationComponent},
  {path:'signIn', component:SignInComponent},
 
  {path:'recruiter',loadChildren: () => import('../app/recruiter/recruiter.module').then(mod => mod.RecruiterModule)},

  {path:'seeker',loadChildren: () => import('../app/seeker/seeker.module').then(mod => mod.SeekerModule)},

  {path:'**',component:PageNotFoundComponent}         //wildcard route
];

const routerOptions = {
  preloadingStrategy: PreloadAllModules,
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



