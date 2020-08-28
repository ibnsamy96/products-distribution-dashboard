import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {

  constructor() { }

  array = ['a', 'b', 'c'];
 // TODO  this array should be in ItemModel formula
  ngOnInit(): void {
  }

}
