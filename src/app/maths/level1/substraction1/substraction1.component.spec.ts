import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Substraction1Component } from './substraction1.component';

describe('Substraction1Component', () => {
  let component: Substraction1Component;
  let fixture: ComponentFixture<Substraction1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Substraction1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Substraction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
