import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemsL1sL1Component } from './poems-l1s-l1.component';

describe('PoemsL1sL1Component', () => {
  let component: PoemsL1sL1Component;
  let fixture: ComponentFixture<PoemsL1sL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemsL1sL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemsL1sL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
