import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1WordSelectiontion1Component } from './l1-word-selectiontion1.component';

describe('L1WordSelectiontion1Component', () => {
  let component: L1WordSelectiontion1Component;
  let fixture: ComponentFixture<L1WordSelectiontion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1WordSelectiontion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1WordSelectiontion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
