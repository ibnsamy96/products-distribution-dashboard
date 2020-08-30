import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  id:number;

  ngOnInit(): void {
    this.id=this.route.snapshot.params['employeeId']
  }

}
