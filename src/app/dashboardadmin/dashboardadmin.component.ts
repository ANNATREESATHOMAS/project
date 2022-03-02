import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {
  eventForm = this.fb.group({
    eventName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    eventDate: ['', [Validators.required, Validators.pattern('[0-9-/]*')]]
  })
  constructor(private ds:DataService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("currentId")
    localStorage.removeItem("currentUserName")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
}
