import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Words1Component } from './words1.component';

describe('Words1Component', () => {
  let component: Words1Component;
  let fixture: ComponentFixture<Words1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Words1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Words1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
