import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { SeekerComponent } from './seeker/seeker.component';
import { AuthguradService } from './authgurad.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/signIn',pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  {path:'signIn', component:SignInComponent},
  {path:'recruiter',canActivate:[AuthguradService],component:RecruiterComponent},
  {path:'seeker',canActivate:[AuthguradService],component:SeekerComponent},
  {path:'**',component:PageNotFoundComponent}         //wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingComponents=[
  RegistrationComponent,
  SignInComponent,
  RecruiterComponent,
  SeekerComponent,
  PageNotFoundComponent
]
