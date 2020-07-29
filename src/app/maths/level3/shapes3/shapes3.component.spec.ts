import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shapes3Component } from './shapes3.component';

describe('Shapes3Component', () => {
  let component: Shapes3Component;
  let fixture: ComponentFixture<Shapes3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shapes3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shapes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
