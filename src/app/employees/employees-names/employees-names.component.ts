import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../shared/services/employees.service';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employees-names',
  templateUrl: './employees-names.component.html',
  styleUrls: ['./employees-names.component.css']
})
export class EmployeesNamesComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  deliveryMen: Employee[] = [];

  ngOnInit(): void {
    this.employeesService.getDeliveryMen().subscribe(
      data => {
        console.log('good');
        console.log(data);
        this.deliveryMen = data;
      }, error => {
        console.log(error);
        alert('Error, look at console.');
      }


    );
  }

}
