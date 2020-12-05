import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1Words1Component } from './l1-words1.component';

describe('L1Words1Component', () => {
  let component: L1Words1Component;
  let fixture: ComponentFixture<L1Words1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1Words1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1Words1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
