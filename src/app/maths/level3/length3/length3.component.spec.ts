import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Length3Component } from './length3.component';

describe('Length3Component', () => {
  let component: Length3Component;
  let fixture: ComponentFixture<Length3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Length3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Length3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
