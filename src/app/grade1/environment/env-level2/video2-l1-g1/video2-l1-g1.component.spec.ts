import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video2L1G1Component } from './video2-l1-g1.component';

describe('Video2L1G1Component', () => {
  let component: Video2L1G1Component;
  let fixture: ComponentFixture<Video2L1G1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video2L1G1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video2L1G1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
