import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2video4Component } from './g2video4.component';

describe('G2video4Component', () => {
  let component: G2video4Component;
  let fixture: ComponentFixture<G2video4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2video4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2video4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
