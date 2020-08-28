import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from './../../../shared/models/ItemModel';

@Component({
  selector: 'app-item-stock',
  templateUrl: './item-stock.component.html',
  styleUrls: ['./item-stock.component.css']
})
export class ItemStockComponent implements OnInit {

  constructor() { }
// @Input() item: ItemModel;
@Input() item;
  ngOnInit(): void {
  }

}
