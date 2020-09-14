import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  setState(a:HTMLSpanElement){
    //check working done
    //TODO we need to make post end point to set state to order
    console.log(a.textContent)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
