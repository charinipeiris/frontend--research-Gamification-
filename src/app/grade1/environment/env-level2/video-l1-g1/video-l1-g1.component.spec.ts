import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoL1G1Component } from './video-l1-g1.component';

describe('VideoL1G1Component', () => {
  let component: VideoL1G1Component;
  let fixture: ComponentFixture<VideoL1G1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoL1G1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoL1G1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
