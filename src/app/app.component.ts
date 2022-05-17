import { Component } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';

  constructor(private myUsersrv: UserProfileService) {
    console.log("i m in app-component classs")
    let myname = this.myUsersrv.getCompName();
    console.log(myname);
  }

  
}


