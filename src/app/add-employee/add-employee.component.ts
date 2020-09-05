import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../shared/services/employees.service';
import { Employee } from '../shared/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
  }


  addEmployee(form: NgForm): void {
    console.log(form.value);

    const employeeInformation: Employee = {
      name: form.value.name,
      email: form.value.email,
      role: form.value.job,
      password: form.value.password,
      phoneNumber: form.value.mobile,
    };

    this.employeesService.postNewEmployee(employeeInformation);



  }


}
