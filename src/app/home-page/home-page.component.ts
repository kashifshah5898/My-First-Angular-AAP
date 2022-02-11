import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../api.service';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DataAddedComponent } from '../data-added/data-added.component';
// import { clearTimeout } from 'timers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  id = -1;
  require = true;

  constructor(private api : ApiService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  infoForm = new FormGroup({
    name : new FormControl('') ,
    age : new FormControl(''),
    gender : new FormControl(''),
  })

  //check wether data is added in array or not
  addData(){
    if(this.infoForm.valid){
    this.api.addData(this.infoForm.value);
    this.dialog.open(DataAddedComponent);
  }
    else{
      alert("Fill all required Fields")
    }
    this.infoForm.reset();
    this.infoForm.controls['name'].setErrors(null);
    this.infoForm.controls['age'].setErrors(null);
    this.infoForm.controls['gender'].setErrors(null);
  }


}
