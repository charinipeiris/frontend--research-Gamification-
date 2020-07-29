import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Width2Component } from './width2.component';

describe('Width2Component', () => {
  let component: Width2Component;
  let fixture: ComponentFixture<Width2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Width2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Width2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
