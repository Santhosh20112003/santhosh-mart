import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _employeeservice:EmployeeService) { }
  public employees:any = [];

  ngOnInit(): void {
    this._employeeservice.getEmployees().subscribe(data => this.employees = data);
  }

}
