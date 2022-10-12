import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.putuserInfo()
   }

  putuserInfo=()=>{
    this.myApi.getUserInfo().subscribe(
      (data)=>{
        this.userData = data
      }
    )
  }

  userData:any = []

  ngOnInit(): void {
  }

}
