import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L2Words2Component } from './l2-words2.component';

describe('L2Words2Component', () => {
  let component: L2Words2Component;
  let fixture: ComponentFixture<L2Words2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2Words2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L2Words2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
