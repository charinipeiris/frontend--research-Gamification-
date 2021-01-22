import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video4L1G1Component } from './video4-l1-g1.component';

describe('Video4L1G1Component', () => {
  let component: Video4L1G1Component;
  let fixture: ComponentFixture<Video4L1G1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video4L1G1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video4L1G1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
