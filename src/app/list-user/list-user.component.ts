import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  mydata: any;


  constructor(private myhttp: HttpClient) {

  }
  ngOnInit(): void {
    
    this.myhttp.get('https://reqres.in/api/users?page=2')
    .pipe()
    .subscribe(
      (mydata) => this.mydata = mydata
    );
  }

}
