import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Time3Component } from './time3.component';

describe('Time3Component', () => {
  let component: Time3Component;
  let fixture: ComponentFixture<Time3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Time3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Time3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
