import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2video2Component } from './g2video2.component';

describe('G2video2Component', () => {
  let component: G2video2Component;
  let fixture: ComponentFixture<G2video2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2video2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2video2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
