import { Observable } from 'rxjs';
// import { HomePageComponent } from './../home-page/home-page.component';
import { ApiService } from './../api.service';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditDataComponent } from '../edit-data/edit-data.component';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DeletedDataComponent } from '../deleted-data/deleted-data.component';



@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  newArr : any;
  button : any;


  displayedColumns: string[] = ['id', 'name', 'age', 'gender','action'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private api : ApiService,
    public dialog: MatDialog) {
    }



  ngOnInit(): void {
     this.newArr = this.api.array1;
     this.dataSource = new MatTableDataSource<any>(this.newArr);
  }

  deleteItem(item : any){
    this.api.deleteData(item);
    this.dataSource = new MatTableDataSource<any>(this.newArr);
    this.dialog.open(DeletedDataComponent)
  }

  editItem(item:any){

     this.dialog.open(EditDataComponent,{
      width : '30%',
      data : item
    });

    const dialogRef = this.dialog.open(EditDataComponent,{
      width : '30%',
      data : item
    });

     dialogRef.afterClosed().subscribe(result => {
      this.dataSource = new MatTableDataSource<any>(this.newArr);
      this.dialog.closeAll();
    });


  }

}
