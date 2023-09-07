import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-showone',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css']
})
export class ShowoneComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
