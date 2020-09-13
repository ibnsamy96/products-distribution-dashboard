import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFfoundComponent } from './not-ffound.component';

describe('NotFfoundComponent', () => {
  let component: NotFfoundComponent;
  let fixture: ComponentFixture<NotFfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
