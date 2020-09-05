import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor() { }

  deliveryMen: { name: string, id: string }[] = [
    { name: 'محمود', id: 'dsdsdw2edd' },
    { name: 'محمد', id: 'dsdsdw2edd' },
    { name: 'أحمد', id: 'dsdsdw2edd' },
  ];

  ngOnInit(): void {
  }

  submitNewOrder(newOrderForm: NgForm): void {
    console.log(newOrderForm.value);

  }
}
