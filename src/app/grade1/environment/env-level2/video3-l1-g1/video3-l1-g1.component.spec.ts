import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video3L1G1Component } from './video3-l1-g1.component';

describe('Video3L1G1Component', () => {
  let component: Video3L1G1Component;
  let fixture: ComponentFixture<Video3L1G1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video3L1G1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video3L1G1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
