import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counting3Component } from './counting3.component';

describe('Counting3Component', () => {
  let component: Counting3Component;
  let fixture: ComponentFixture<Counting3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Counting3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counting3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
