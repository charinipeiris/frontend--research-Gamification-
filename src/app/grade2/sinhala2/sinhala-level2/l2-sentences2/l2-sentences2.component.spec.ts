import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L2Sentences2Component } from './l2-sentences2.component';

describe('L2Sentences2Component', () => {
  let component: L2Sentences2Component;
  let fixture: ComponentFixture<L2Sentences2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2Sentences2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L2Sentences2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
