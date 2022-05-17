import { Injectable } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {
url="www.something";
  constructor(private userServ: UserProfileService) 
  {
    let user = userServ.getAddress();
    console.log(user);
  }
}
