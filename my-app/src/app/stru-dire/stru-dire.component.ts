import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stru-dire',
  templateUrl: './stru-dire.component.html',
  styleUrls: ['./stru-dire.component.css']
})
export class StruDireComponent implements OnInit {
  names = [
    { name: "Kamal"},
    { name: "Mitchel"},
    { name: "Yoon"},
    { name: "Johnson"},
    { name: "Jet Li"}
  ];

  show:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
