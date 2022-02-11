import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  login = false;
  array1 = Array();
  i = 0;
  id = -1;


  addData(data:any){
    this.id += 1;
    data.id = this.id;
    this.array1.push(data)
    // debugger
   }

  dData = [];
  deleteData(data : any){
    const index = this.array1.findIndex( i => i.id === data.id)
    this.array1.splice(index,1);
    this.array1
    // debugger
  }

    array2 = [];
   editData(data:any){
    console.log(this.array1)
    const index = this.array1.findIndex( i => i.id === data.id)
    this.array1[index] = data
    // debugger
  }

  showData(){
    return this.array1;
    debugger
  }


}
