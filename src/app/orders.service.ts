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
  // API_END_POINTS = { order: 'order' };

  constructor(private http: HttpClient) { }

  postNewOrder(order: OrderModel): Observable<any> {
    // this function works well -> but it doesn't take the right data
    const order2: OrderModel = {
      // انا زودت الداتا تايب و غيرت حبهفي الاوردر موديل واظن كده احسن
      // this service file should be in shared folder brazer
      facebookAdminName: 'ahmed',
      orderDate: Date.now(),
      deliveryName: 'nader',
      itemName: 'كوتشي',
      itemCost: 55,
      deliveryCost: 20,
      clientName: 'Ahmed Moh',
      clientPhoneNumber1: 10191111816,
      clientPhoneNumber2: 10191111816,
      address: {
        region: 'Tanta',
        addressInDetails: 'Share3 kaza',
      },
      orderState: {
        onDelivery: true,
        delivered: false,
        rejected: false,
      },
    };
    return this.http.post(this.API_DOMAIN + '/orders.json', order2);
  }

  getAllOrders(): Observable<any> {

    return this.http.get('https://barq-api.azurewebsites.net/api/orders').pipe(
      map((ordersStream: OrderModel[]) => {
        const ordersArray = [];
        // tslint:disable-next-line: forin
        for (const id in ordersStream) {
          ordersArray.push({ ...ordersStream[id] });
        }
        return ordersArray;
      }));
  }

  getOrderByID(orderID: string): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.get<OrderModel>(orderAPI);
  }


  updateOrderByID(orderID: string, order: OrderModel): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.put(orderAPI, order);
  }

  deleteOrderByID(orderID: string): Observable<any> {
    const orderAPI = 'https://barq-api.azurewebsites.net/api/orders/' + orderID;
    return this.http.delete(orderAPI);
  }


}
