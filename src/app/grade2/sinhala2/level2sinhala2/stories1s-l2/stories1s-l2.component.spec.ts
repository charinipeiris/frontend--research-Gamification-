import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stories1sL2Component } from './stories1s-l2.component';

describe('Stories1sL2Component', () => {
  let component: Stories1sL2Component;
  let fixture: ComponentFixture<Stories1sL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stories1sL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stories1sL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
