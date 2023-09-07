import { NgModule } from "@angular/core";
import { LocalStorageService } from "./services/localstorage.services";
import { ShowoneComponent } from "./showone/showone.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";



@NgModule({
    declarations:[
        ShowoneComponent
    ],
    imports:[
        MatCardModule,
        MatButtonModule,
        MatDialogModule
        
    ],
    exports:[],
    providers:[
        ShowoneComponent,
        LocalStorageService
    ]
})

export class SharedModule{

}