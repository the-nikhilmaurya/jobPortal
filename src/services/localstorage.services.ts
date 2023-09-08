import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

  getEmail() {
    const storedData = localStorage.getItem('userdata');
    if (storedData !== null) {
      const userdata = JSON.parse(storedData);
      return userdata.email
    } else {
      // console.log('no data: ')
      return ""
    }
  }

  getUsertype() {
    const storedData = localStorage.getItem('userdata');
    if (storedData !== null) {
      const userdata = JSON.parse(storedData);
      return userdata.usertyped
    } else {
      // console.log('no data: ')
      return ""
    }
  }

  getName() {
    const storedData = localStorage.getItem('userdata');
    if (storedData !== null) {
      const userdata = JSON.parse(storedData);
      return userdata.name
    } else {
      // console.log('no data: ')
      return ""
    }
  }
}