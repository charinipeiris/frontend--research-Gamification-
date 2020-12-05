import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1Poems1Component } from './l1-poems1.component';

describe('L1Poems1Component', () => {
  let component: L1Poems1Component;
  let fixture: ComponentFixture<L1Poems1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1Poems1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1Poems1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
