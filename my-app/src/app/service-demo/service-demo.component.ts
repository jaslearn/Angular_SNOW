import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  public employes:any=[];
 
  constructor(private employeeService:EmployeeService) {
     this.employes=employeeService.getEmployees();
   }

  ngOnInit(): void {
  }

}
