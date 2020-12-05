import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1Sentences1Component } from './l1-sentences1.component';

describe('L1Sentences1Component', () => {
  let component: L1Sentences1Component;
  let fixture: ComponentFixture<L1Sentences1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1Sentences1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1Sentences1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
