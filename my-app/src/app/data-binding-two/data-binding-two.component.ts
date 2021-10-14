import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-two',
  templateUrl: './data-binding-two.component.html',
  styleUrls: ['./data-binding-two.component.css']
})
export class DataBindingTwoComponent implements OnInit {
  val: string = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
