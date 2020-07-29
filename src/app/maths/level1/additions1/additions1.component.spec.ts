import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Additions1Component } from './additions1.component';

describe('Additions1Component', () => {
  let component: Additions1Component;
  let fixture: ComponentFixture<Additions1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Additions1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Additions1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
