import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';
import { Employee } from '../models/employee.model';
import { FacebookAdmin } from '../models/facebook-admin.model';
import { DeliveryMan } from '../models/delivery-man.model';


interface FormattedEmployee {
  [x: string]: { name: string, phoneNumber: number };
}


@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor(private gatewayService: GatewayService) { }

  signUpForEmployee(employeeCredentials: { email: string, password: string }): void {
    // signUp for him
    console.log(employeeCredentials);

  }

  postNewEmployee(employee: Employee): void {

    // TODO after signing up let postNew happens only in subscribe
    this.signUpForEmployee({ email: employee.email, password: employee.password });

    this.gatewayService.postNew(employee, 'employee').subscribe(data => {
      console.log('send to employees gateway');
      console.log(data);
      // data = {name :'unique employee ID'}
      this.addEmployeeByRole(employee, data.name);
    }, error => {
      console.log(error);
      alert('Error, look at console.');
    });

  }

  addEmployeeByRole(employee: Employee, employeeID: string): void {

    // function to format employee and add him to his role database
    const formattedEmployee: FormattedEmployee = {
      [employeeID]: {
        name: employee.name,
        phoneNumber: employee.phoneNumber,
      }

    };

    switch (employee.role) {
      case 'delivery-man':
        this.putNewDeliveryMan(formattedEmployee);
        break;
      case 'facebook-admin':
        this.putNewFacebookAdmin(formattedEmployee);
        break;

      case 'system-admin':
        this.putNewSystemAdmin(formattedEmployee);
        break;

      default:
        break;
    }



  }


  putNewDeliveryMan(formattedEmployee: FormattedEmployee): void {
    this.gatewayService.putNew(formattedEmployee, 'deliveryMan').subscribe(
      (data: DeliveryMan) => {
        console.log('send to deliveryMan gateway');
        console.log(data);
        alert('Error, look at console.');
      }, error => {
        console.log(error);
        alert('Error, look at console.');
      });
  }

  putNewFacebookAdmin(formattedEmployee: FormattedEmployee): void {
    this.gatewayService.putNew(formattedEmployee, 'fbAdmin').subscribe(
      (data: DeliveryMan) => {
        console.log('send to deliveryMan gateway');
        console.log(data);
        alert('Error, look at console.');
      }, error => {
        console.log(error);
        alert('Error, look at console.');
      });
  }

  putNewSystemAdmin(formattedEmployee: FormattedEmployee): void {
    this.gatewayService.putNew(formattedEmployee, 'sysAdmin').subscribe(
      (data: DeliveryMan) => {
        console.log('send to deliveryMan gateway');
        console.log(data);
        alert('Error, look at console.');
      }, error => {
        console.log(error);
        alert('Error, look at console.');
      });
  }


  getDeliveryMen(): any[] {

    this.gatewayService.getAll('employee').subscribe(
      data => {
        console.log('good');
        console.log(data);

        return data;
      }, error => {
        console.log(error);
        alert('Error, look at console.');
      }


    );

    return [];

  }




}
