import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video5L1G1Component } from './video5-l1-g1.component';

describe('Video5L1G1Component', () => {
  let component: Video5L1G1Component;
  let fixture: ComponentFixture<Video5L1G1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video5L1G1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video5L1G1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
