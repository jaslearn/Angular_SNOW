import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-dire',
  templateUrl: './att-dire.component.html',
  styleUrls: ['./att-dire.component.css']
})
export class AttDireComponent implements OnInit {

  getColor(country: any) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
