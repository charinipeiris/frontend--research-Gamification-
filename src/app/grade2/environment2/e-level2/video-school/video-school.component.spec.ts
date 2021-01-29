import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSchoolComponent } from './video-school.component';

describe('VideoSchoolComponent', () => {
  let component: VideoSchoolComponent;
  let fixture: ComponentFixture<VideoSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
