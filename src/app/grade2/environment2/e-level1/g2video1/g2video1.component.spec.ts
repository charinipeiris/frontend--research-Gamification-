import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2video1Component } from './g2video1.component';

describe('G2video1Component', () => {
  let component: G2video1Component;
  let fixture: ComponentFixture<G2video1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2video1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2video1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
