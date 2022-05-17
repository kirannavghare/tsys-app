import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

 constructor(private add:UserProfileService)
 {
   let addr=this.add.getAddress();
   console.log(addr);
 }
  ngOnInit(): void 
  {
  }

}
