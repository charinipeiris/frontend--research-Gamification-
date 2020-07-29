import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Money3Component } from './money3.component';

describe('Money3Component', () => {
  let component: Money3Component;
  let fixture: ComponentFixture<Money3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Money3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Money3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
