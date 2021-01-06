import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Storiesl1sL1Component } from './storiesl1s-l1.component';

describe('Storiesl1sL1Component', () => {
  let component: Storiesl1sL1Component;
  let fixture: ComponentFixture<Storiesl1sL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Storiesl1sL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Storiesl1sL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
