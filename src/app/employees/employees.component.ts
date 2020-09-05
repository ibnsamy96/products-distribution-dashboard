import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  jobType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobType = this.route.snapshot.params.job;
    this.route.params.subscribe(
      (params: Params) => {
        this.jobType = params.job;
      }

    );

  }

}
