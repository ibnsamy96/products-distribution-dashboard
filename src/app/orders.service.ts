import { Injectable } from '@angular/core';
import { Order } from './shared/models/order.model';
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

  postNewOrder(order: Order, API_END_POINT: 'orders' | 'employees'): Observable<any> {

    return this.http.post<{ name: string }>(`${this.API_DOMAIN}/${API_END_POINT}.json`, order);
  }

  getAllOrders(API_END_POINT: 'orders' | 'employees'): Observable<any> {

    return this.http.get<{ [key: string]: Order }>(`${this.API_DOMAIN}/${API_END_POINT}.json`).pipe(
      map((ordersStream) => {

        // console.log(ordersStream);

        const ordersArray: Order[] = [];
        // tslint:disable-next-line: forin
        for (const key in ordersStream) {
          ordersArray.push({ ...ordersStream[key], id: key });
        }
        return ordersArray;
      }));
  }

  getOrderByID(orderID: string, API_END_POINT: 'orders' | 'employees'): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.get<Order>(orderAPI);
  }


  updateOrderByID(orderID: string, order: Order, API_END_POINT: 'orders' | 'employees'): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.put(orderAPI, order);
  }

  deleteOrderByID(orderID: string, API_END_POINT: 'orders' | 'employees'): Observable<any> {
    return this.http.delete(`${this.API_DOMAIN}/${API_END_POINT}/${orderID}.json`);
  }


}
