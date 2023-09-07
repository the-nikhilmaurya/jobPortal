import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'; // navigation bar
import { AuthService } from '../services/auth.service';
import { AuthguradService } from '../services/authgurad.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerService } from '../services/server.service'
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ServerService,AuthService,AuthguradService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
