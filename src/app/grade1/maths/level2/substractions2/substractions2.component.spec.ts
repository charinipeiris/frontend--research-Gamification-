import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Substractions2Component } from './substractions2.component';

describe('Substractions2Component', () => {
  let component: Substractions2Component;
  let fixture: ComponentFixture<Substractions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Substractions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Substractions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
