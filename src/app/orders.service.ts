import { Injectable } from '@angular/core';
import { OrderModel } from './shared/models/orderModel';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


/*

Dear Rafaat, Don't touch that file عشان أنا لسه بعدّل فيه و مش عايز أنسى بس اللي عاملُه

*/


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  API_DOMAIN = 'https://awfarlak-dashboard.firebaseio.com';
  API_END_POINTS: 'orders' | 'employees';


  constructor(private http: HttpClient) { }

  postNewOrder(order: OrderModel, API_END_POINT: 'orders' | 'employees'): Observable<any> {

    return this.http.post(`${this.API_DOMAIN}/${API_END_POINT}.json`, order);
  }

  getAllOrders(API_END_POINT: 'orders' | 'employees'): Observable<any> {

    return this.http.get(`${this.API_DOMAIN}/${API_END_POINT}.json`).pipe(
      map((ordersStream: OrderModel[]) => {

        // console.log(ordersStream);

        const ordersArray = [];
        // tslint:disable-next-line: forin
        for (const id in ordersStream) {
          ordersArray.push({ id, ...ordersStream[id] });
        }
        return ordersArray;
      }));
  }

  getOrderByID(orderID: string, API_END_POINT: 'orders' | 'employees'): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.get<OrderModel>(orderAPI);
  }


  updateOrderByID(orderID: string, order: OrderModel, API_END_POINT: 'orders' | 'employees'): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.put(orderAPI, order);
  }

  deleteOrderByID(orderID: string, API_END_POINT: 'orders' | 'employees'): Observable<any> {
    return this.http.delete(`${this.API_DOMAIN}/${API_END_POINT}/${orderID}.json`);
  }


}
