import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.pattern('[0-9a-z@.]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
      var uname = this.registerForm.value.uname
      var email = this.registerForm.value.email
      var pswd = this.registerForm.value.pswd
      var phone = this.registerForm.value.phone
      this.ds.register(uname, email, pswd,phone).subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("")
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
