import { NgModule } from "@angular/core";
import { LocalStorageService } from "../../services/localstorage.services";
import { ShowoneComponent } from "./showone/showone.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
        ShowoneComponent,
        PageNotFoundComponent,
        HeaderComponent
    ],
    imports:[
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
        
    ],
    exports:[
        HeaderComponent,
        ShowoneComponent,
        PageNotFoundComponent,

    ]
})

export class SharedModule{

}