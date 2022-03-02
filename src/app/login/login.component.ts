import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email=""
  pswd=""
  uname=""
   loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[0-9a-z@.]*')]],
     pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
   })
   adminloginForm = this.fb.group({
     pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
     username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
   })
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


login() {
  if (this.loginForm.valid) {
    var email = this.loginForm.value.email
    var password = this.loginForm.value.pswd
    this.ds.login(email, password).subscribe((result: any) => {
      console.log(result);
      
      if (result) {
        alert(result.message)
        // localStorage.setItem("currentId",JSON.stringify(result.currentId))
        // localStorage.setItem("currentUserName",JSON.stringify(result.currentUserName))
        // localStorage.setItem("token",JSON.stringify(result.token))
        this.router.navigateByUrl("dashboard")
      }
    },
      (result) => {
        alert(result.error.message)
      }
    )
  }
  else {
    alert("invalid form")
  }
}

adminlogin() {
  if (this.adminloginForm.valid) {
    var username = this.adminloginForm.value.username
    var password = this.adminloginForm.value.pswd
    console.log(username,password);
    
    this.ds.adminlogin(username, password).subscribe((result: any) => {
      if (result) {
        alert(result.message)
        localStorage.setItem("currentId",JSON.stringify(result.currentId))
        localStorage.setItem("currentUserName",JSON.stringify(result.currentUserName))
        localStorage.setItem("token",JSON.stringify(result.token))
        this.router.navigateByUrl("dashboard")
      }
    },
      (result) => {
        alert(result.error.message)
      }
    )
  }
  else {
    alert("invalid form")
  }
}
}
