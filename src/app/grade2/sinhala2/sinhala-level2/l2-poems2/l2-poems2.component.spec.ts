import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L2Poems2Component } from './l2-poems2.component';

describe('L2Poems2Component', () => {
  let component: L2Poems2Component;
  let fixture: ComponentFixture<L2Poems2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2Poems2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L2Poems2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
