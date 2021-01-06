import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Words1L2Component } from './words1-l2.component';

describe('Words1L2Component', () => {
  let component: Words1L2Component;
  let fixture: ComponentFixture<Words1L2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Words1L2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Words1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
