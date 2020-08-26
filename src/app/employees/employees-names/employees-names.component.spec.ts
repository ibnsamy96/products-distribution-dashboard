import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesNamesComponent } from './employees-names.component';

describe('EmployeesNamesComponent', () => {
  let component: EmployeesNamesComponent;
  let fixture: ComponentFixture<EmployeesNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
