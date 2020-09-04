import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

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
