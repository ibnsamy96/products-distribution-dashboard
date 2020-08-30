import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css']
})
export class NavContainerComponent implements OnInit {
  id:number=5
  constructor() { }

  ngOnInit(): void {
  }

}
