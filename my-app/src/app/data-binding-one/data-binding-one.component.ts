import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-one',
  templateUrl: './data-binding-one.component.html',
  styleUrls: ['./data-binding-one.component.css']
})
export class DataBindingOneComponent implements OnInit {

  name='Jasdhir';
  constructor() { }

  ngOnInit(): void {
  }
  onShow(){
    alert("Event Binding");
  }

}
