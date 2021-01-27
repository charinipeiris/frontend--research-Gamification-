import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2video3Component } from './g2video3.component';

describe('G2video3Component', () => {
  let component: G2video3Component;
  let fixture: ComponentFixture<G2video3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2video3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2video3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
