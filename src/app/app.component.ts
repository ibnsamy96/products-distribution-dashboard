import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Products-Distribution-Dashboard';

  constructor(private ordersService: OrdersService) { }


  ngOnInit(): void {

    /*
       trying subscription to HTTP methods in service -- TODO delete it after linking with database

        this.ordersService.postNewOrder(5).subscribe(data => {
          console.log('data');
          console.log(data);
        }, error => {
          console.log(error);
          console.log('error');
        });

    */
  }
}
