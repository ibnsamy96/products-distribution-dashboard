import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { NavItemComponent } from './nav-container/nav-item/nav-item.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeesNamesComponent } from './employees/employees-names/employees-names.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { StockComponent } from './stock/stock.component';
import { ItemStockComponent } from './stock/item-stock/item-stock.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { AddItemStockComponent } from './stock/add-item-stock/add-item-stock.component';
import { OrderViewComponent } from './home-page/order-view/order-view.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderSearchComponent } from './home-page/order-search/order-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavContainerComponent,
    NavItemComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeesNamesComponent,
    LoginComponent,
    OrdersComponent,
    OrderComponent,
    StockComponent,
    ItemStockComponent,
    AddOrderComponent,
    AddItemStockComponent,
    OrderViewComponent,
    OrderSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
