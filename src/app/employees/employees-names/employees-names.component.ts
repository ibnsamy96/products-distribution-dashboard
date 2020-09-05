import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../shared/services/employees.service';

@Component({
  selector: 'app-employees-names',
  templateUrl: './employees-names.component.html',
  styleUrls: ['./employees-names.component.css']
})
export class EmployeesNamesComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    console.log(this.employeesService.getDeliveryMen());
  }

}
