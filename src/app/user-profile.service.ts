import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() {
    console.log("i am in service")
  }
  getCompName() {
    return "T-System";
  }
  getAddress() {
    let addr={
      area:'baner',
      pincode:3131,
      locality:'tower'
    };
}
}
