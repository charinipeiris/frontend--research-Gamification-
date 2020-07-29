import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Time1Component } from './time1.component';

describe('Time1Component', () => {
  let component: Time1Component;
  let fixture: ComponentFixture<Time1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Time1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Time1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
