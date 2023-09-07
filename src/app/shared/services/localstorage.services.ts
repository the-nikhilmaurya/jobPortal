import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService{
    getEmail(){
        const storedData = localStorage.getItem('userdata');
        if (storedData !== null) {
          let data: { email: string, password: string, usertype: string } = JSON.parse(storedData);
          return data.email
        } else {
          return ""
        }
      }
}