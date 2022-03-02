import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
list:any
  constructor(private ds: DataService) { 
      
    // this.ds.userlist().subscribe((result:any)=>{
    //   this.list=result.events
    // },
    // (result)=>{
    //   alert(result.error.message) 
    // }
    // )}
  }
  
    ngOnInit(): void {
    }
  
  }
  