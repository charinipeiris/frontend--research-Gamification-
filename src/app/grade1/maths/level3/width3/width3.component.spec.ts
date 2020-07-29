import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Width3Component } from './width3.component';

describe('Width3Component', () => {
  let component: Width3Component;
  let fixture: ComponentFixture<Width3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Width3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Width3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
