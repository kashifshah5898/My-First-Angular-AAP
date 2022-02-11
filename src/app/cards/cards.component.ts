import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  newArr: any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.newArr = this.api.array1;
  }

}
