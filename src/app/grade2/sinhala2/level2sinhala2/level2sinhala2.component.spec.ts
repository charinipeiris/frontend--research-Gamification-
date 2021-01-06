import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2sinhala2Component } from './level2sinhala2.component';

describe('Level2sinhala2Component', () => {
  let component: Level2sinhala2Component;
  let fixture: ComponentFixture<Level2sinhala2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2sinhala2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2sinhala2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
