import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Substractions3Component } from './substractions3.component';

describe('Substractions3Component', () => {
  let component: Substractions3Component;
  let fixture: ComponentFixture<Substractions3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Substractions3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Substractions3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
