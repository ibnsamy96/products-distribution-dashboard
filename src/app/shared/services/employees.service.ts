import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';
import { Employee } from "../models/employee.model";
import { FacebookAdmin } from "../models/facebook-admin.model";
import { DeliveryMan } from "../models/delivery-man.model";


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private gatewayService: GatewayService) { }

  signUpForEmployee(employeeCredentials: { email: string, password: string }): void {
    // signUp for him
  }

  postNewEmployee(employee: Employee): void {

    // TODO after signing up let postNew happens only in subscribe
    this.signUpForEmployee({ email: employee.email, password: employee.password });

    this.gatewayService.postNew(employee, 'employees').subscribe(data => {
      console.log(data);

      this.formatNewDeliveryMan(employee, data.name);

      alert('Done, order ID is ' + data.name);
    }, error => {
      console.log(error);
      alert('Error, look at console.');
    });

  }

  formatNewDeliveryMan(employee: Employee, employeeID: string): void {

    const deliveryMan: DeliveryMan = {
      id: employeeID,
      name: employee.name,
      phoneNumber: employee.phoneNumber,
    };

    this.postNewDeliveryMan(deliveryMan);

  }


  postNewDeliveryMan(deliveryMan: DeliveryMan): void {
    this.gatewayService.postNew(deliveryMan, 'deliveryMan').subscribe(data => {
      console.log(data);
      alert('Done, order ID is ' + data.name);
    }, error => {
      console.log(error);
      alert('Error, look at console.');
    });
  }





}
