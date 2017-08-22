import { Component, OnInit } from '@angular/core';
import { Address } from "../address";
import { Employee } from "../employee";
import { ApiService } from "../api.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css']
})
export class GetEmployeesComponent implements OnInit {

  temporaryAddress = new Address(1, 'Indore', 'India');

  permanentAddress = new Address(2, 'Indore', 'India');

  employee = new Employee(1, 'Archit Kashyap', [this.temporaryAddress, this.permanentAddress]);

  constructor(private apiService: ApiService) { }

  observableEmployees: Observable<Employee[]>;
  employees: Employee[];

  ngOnInit() {

    // this.observableEmployees = this.apiService.retrieveWTObservable();
    // this.observableEmployees.subscribe(employees => this.employees = employees);  

    this.apiService.retrieve()
      .then(employees => this.employees = employees);      
    console.log(this.employees);

  }

  getEmployee(){    

     this.apiService.retrieve()
      .then(employees => this.employees = employees);      
    console.log(this.employees);
  }

}
