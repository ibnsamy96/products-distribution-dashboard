import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


/*

This file takes data and connect to api.

*/


@Injectable({
  providedIn: 'root'
})

export class GatewayService {

  API_DOMAIN = 'https://awfarlak-dashboard.firebaseio.com';

  API_END_POINTS = {
    order: 'orders',
    employee: 'employees',
    deliveryMan: 'delivery-men',
    fbAdmin: 'facebook-admins',
    sysAdmin: 'system-admins'
  };


  constructor(private http: HttpClient) { }

  postNew(
    data: any,
    END_POINT_REF: 'order' | 'employee' | 'deliveryMan' | 'sysAdmin' | 'fbAdmin'
  ): Observable<any> {

    return this.http.post<{ name: string }>(`${this.API_DOMAIN}/${this.API_END_POINTS[END_POINT_REF]}.json`, data);

  }

  putNew(
    data: any,
    END_POINT_REF: 'order' | 'employee' | 'deliveryMan' | 'sysAdmin' | 'fbAdmin'
  ): Observable<any> {

    return this.http.put<any>(`${this.API_DOMAIN}/${this.API_END_POINTS[END_POINT_REF]}.json`, data);

  }



  getAll(END_POINT_REF: 'order' | 'employee' | 'deliveryMan' | 'sysAdmin' | 'fbAdmin'): Observable<any> {

    return this.http.get<{ [key: string]: Order }>(`${this.API_DOMAIN}/${this.API_END_POINTS[END_POINT_REF]}.json`).pipe(
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

  getByID(orderID: string, END_POINT_REF: 'order' | 'employee' | 'deliveryMan' | 'sysAdmin' | 'fbAdmin'): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.get<Order>(orderAPI);
  }


  updateByID(orderID: string, order: Order, END_POINT_REF: 'order' | 'employee' | 'deliveryMan' | 'sysAdmin' | 'fbAdmin'): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.put(orderAPI, order);
  }

  deleteByID(orderID: string, END_POINT_REF: 'order' | 'employee' | 'deliveryMan' | 'sysAdmin' | 'fbAdmin'): Observable<any> {
    return this.http.delete(`${this.API_DOMAIN}/${this.API_END_POINTS[END_POINT_REF]}/${orderID}.json`);
  }


}
