import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Substraction3Component } from './substraction3.component';

describe('Substraction3Component', () => {
  let component: Substraction3Component;
  let fixture: ComponentFixture<Substraction3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Substraction3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Substraction3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
