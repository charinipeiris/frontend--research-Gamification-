import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1sinhala2Component } from './level1sinhala2.component';

describe('Level1sinhala2Component', () => {
  let component: Level1sinhala2Component;
  let fixture: ComponentFixture<Level1sinhala2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1sinhala2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1sinhala2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
