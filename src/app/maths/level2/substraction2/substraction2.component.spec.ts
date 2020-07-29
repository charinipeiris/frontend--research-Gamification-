import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Substraction2Component } from './substraction2.component';

describe('Substraction2Component', () => {
  let component: Substraction2Component;
  let fixture: ComponentFixture<Substraction2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Substraction2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Substraction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
