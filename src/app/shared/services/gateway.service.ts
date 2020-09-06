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


  constructor(private http: HttpClient) { }

  postNew(
    data: any,
    API_END_POINT: string
  ): Observable<any> {

    return this.http.post<{ name: string }>(`${this.API_DOMAIN}/${API_END_POINT}.json`, data);

  }

  putNew(
    data: any,
    API_END_POINT: string
  ): Observable<any> {

    return this.http.put<any>(`${this.API_DOMAIN}/${API_END_POINT}.json`, data);

  }



  getAll(API_END_POINT: string): Observable<any> {

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

  getByID(orderID: string, API_END_POINT: string): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.get<Order>(orderAPI);
  }


  updateByID(orderID: string, order: Order, API_END_POINT: string): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.put(orderAPI, order);
  }

  deleteByID(orderID: string, API_END_POINT: string): Observable<any> {
    return this.http.delete(`${this.API_DOMAIN}/${API_END_POINT}/${orderID}.json`);
  }


}
