import { UpdatedComponent } from './../updated/updated.component';
import { newArray } from '@angular/compiler/src/util';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor(private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<any>,
    private dialog : MatDialog
    ) {}

    name : any;
    age : any;
    gender : any;
    dataTwo : any
    newInfo : any;
    id:any;

  ngOnInit(): void {
    if(this.editData){
     this.name= this.infoFor.controls['name'].setValue(this.editData.name);
     this.age = this.infoFor.controls['age'].setValue(this.editData.age);
     this.gender =  this.infoFor.controls['gender'].setValue(this.editData.gender);
     this.id = this.infoFor.controls['id'].setValue(this.editData.id);
    }

    // this.newInfo = new this.dataTwo({
    //   name : this.infoFor.controls['name'].setValue(this.editData.name),
    //   age : this.infoFor.controls['age'].setValue(this.editData.age),
    //   gender : this.infoFor.controls['gender'].setValue(this.editData.gender),
    // })

  //Not Working

    // this.newInfo = [{
    //   name : this.infoFor.controls['name'].setValue(this.editData.name),
    //   age : this.infoFor.controls['age'].setValue(this.editData.age),
    //   gender : this.infoFor.controls['gender'].setValue(this.editData.gender),
    // }]
  }

  infoFor = new FormGroup({
    id : new FormControl(),
    name : new FormControl() ,
    age : new FormControl(),
    gender : new FormControl('Male'),
  })

  //check wether data is added in array or not
  update(){
    this.dialog.open(UpdatedComponent);
    this.api.editData(this.infoFor.value);
    this.dialogRef.close();
  }


}
