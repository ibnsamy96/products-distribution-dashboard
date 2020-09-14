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
  navigateDetails(employeeName){
    console.log(employeeName)
     //TODO فاضل تربطها بالباااااك  و تعملها هنا عشان فعلا مش فاكر ازاي

  }
  removeEmployee(employee){
    const index = this.deliveryMen.indexOf(employee)
    this.deliveryMen.splice(index,1)
    //TODO فاضل تربطها بالباااااك

  }

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
