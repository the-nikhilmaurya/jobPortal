import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, rountingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { SignInComponent } from './sign-in/sign-in.component';
import {  RecruiterComponent } from './recruiter/recruiter.component';
import { SeekerComponent } from './seeker/seeker.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table'; // referece recruiter
// import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'; // navigation bar
import { AuthService } from '../services/auth.service';
import { AuthguradService } from '../services/authgurad.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ServerService } from '../services/server.service'


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignInComponent,
    RecruiterComponent,
    SeekerComponent,
    AddJobsComponent,
    rountingComponents,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule

  ],
  providers: [ServerService,AuthService,AuthguradService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
