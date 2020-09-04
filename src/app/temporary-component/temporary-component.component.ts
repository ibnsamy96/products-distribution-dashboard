import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../shared/services/gateway.service';


@Component({
  selector: 'app-temporary-component',
  templateUrl: './temporary-component.component.html',
  styleUrls: ['./temporary-component.component.css']
})
export class TemporaryComponentComponent implements OnInit {

  constructor(private ordersService: GatewayService) { }

  ngOnInit(): void {

    /*
       trying subscription to HTTP methods in service -- TODO delete it after linking with database
*/


  }


  addData(): void {

    const order = {
      isCounted: false,
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

    this.ordersService.postNewOrder(order, 'orders').subscribe(data => {
      console.log(data);
      alert('Done, order ID is ' + data.name);
    }, error => {
      console.log(error);
      alert('Error, look at console.');
    });
  }

  showData(): void {
    this.ordersService.getAllOrders('orders').subscribe(data => {
      console.log(data);
      alert('Done, look at console.');
    }, error => {
      console.log(error);
      alert('Error, look at console.');
    });
  }



  updateData(): void {
    alert('Update needs the form to be finished.');

    // this.ordersService.getAllOrders('orders').subscribe(data => {
    //   console.log(data);
    //   alert('Done, look at console.');
    // }, error => {
    //   console.log(error);
    //   alert('Error, look at console.');
    // });
  }


  deleteData(): void {
    const orderID = prompt('Enter Order ID:', '');
    if (orderID == null || orderID === '') {
      alert('You didn\'t add order id, Try again.');
    } else {
      this.ordersService.deleteOrderByID(orderID, 'orders').subscribe(data => {
        console.log(data);
        alert('Done, look at console.');
      }, error => {
        console.log(error);
        alert('Error, look at console.');
      });
    }

  }



}
