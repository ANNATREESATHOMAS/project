import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  eventForm = this.fb.group({
    eventName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    eventDate: ['', [Validators.required, Validators.pattern('[0-9/-]*')]]
  })
  user:any
  constructor(private ds:DataService, private router: Router, private fb:FormBuilder) { 
    if (localStorage.getItem("currentUserName")) {
      this.user = JSON.parse(localStorage.getItem("currentUserName") || "")
    } 
  }

  ngOnInit(): void {
  }
  delete() {
    let id=JSON.parse(localStorage.getItem("currentId") || "")
   this.ds.delete(id).subscribe((result: any) => {
     if (result) {
       alert(result.message)
       this.router.navigateByUrl("")
     }
   })
 }
}
