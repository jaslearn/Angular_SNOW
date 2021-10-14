import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-comp',
  templateUrl: './lifecycle-comp.component.html',
  styleUrls: ['./lifecycle-comp.component.css']
})
export class LifecycleCompComponent implements OnInit {

  myTitle="This is LifeCycle Component"
  constructor() { 
    //alert("1. on changes called");
  }

  ngOnInit(): void {
    //alert("2. on init is called");
  }
  /*ngDoCheck(): void {
    alert("3. do check is called");
    }
    ngAfterContentInit(): void {
    alert("4. after content init called");
    }
    ngAfterContentChecked(): void {
    alert("5. after content check called");
    }
    ngAfterViewInit(): void {
    alert('6. after view init called');
    }
    ngAfterViewChecked(): void {
    alert('7. after view init checked');
    }
    ngOnDestroy(): void {
    alert('8. on destroy called');
    }*/
}
