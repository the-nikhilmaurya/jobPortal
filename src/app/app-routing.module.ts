import { NgModule } from '@angular/core';
import {  PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInModule } from './sign-in/sign-in.module';





const routes: Routes = [
  {path:'',redirectTo:'/signIn',pathMatch:'full'},     
  {path:'signIn', loadChildren: () => import('../app/sign-in/sign-in.module').then(mod=>mod.SignInModule)},
  {path:'registration', loadChildren: () => import('../app/registration/registration.module').then(mod=>mod.RegistrationModule)},
  {path:'recruiter',loadChildren: () => import('../app/recruiter/recruiter.module').then(mod => mod.RecruiterModule)},

  {path:'seeker',loadChildren: () => import('../app/seeker/seeker.module').then(mod => mod.SeekerModule)},

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



