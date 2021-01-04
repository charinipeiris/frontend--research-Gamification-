import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L2WordSelectiontion2Component } from './l2-word-selectiontion2.component';

describe('L2WordSelectiontion2Component', () => {
  let component: L2WordSelectiontion2Component;
  let fixture: ComponentFixture<L2WordSelectiontion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2WordSelectiontion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L2WordSelectiontion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
