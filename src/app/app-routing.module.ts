import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { OrderComponent } from './orders/order/order.component';

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'employees/:job', component: EmployeesComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addOrder', component: AddOrderComponent },
  { path: 'profile/:jobType/:employeeId', component: EmployeeProfileComponent },
  { path: 'order/:orderId', component: OrderComponent },
  { path: '**', component: HomePageComponent }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
