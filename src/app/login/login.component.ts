import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginDialaogComponent } from '../login-dialaog/login-dialaog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  someThingWentWrong : any;
  // isLogin = false;

  constructor(private router: Router,private api : ApiService,private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  myLoginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl()
  })

  login(){
    if (this.myLoginForm.value.email == 'admin@gmail.com' && this.myLoginForm.value.password == '123') {
      this.api.login = true;
      this.dialog.open(LoginDialaogComponent);
      this.router.navigateByUrl('/Home-Page');
    } else {
      // this.router.navigateByUrl('');
      this.someThingWentWrong ='*Please enter valid Credentials';
      this.myLoginForm.reset();
      this.myLoginForm.controls['email'].setErrors(null);
      this.myLoginForm.controls['password'].setErrors(null);
      // this.infoForm.controls['gender'].setErrors(null);
    }
  }
email = this.myLoginForm.value.email;

}
