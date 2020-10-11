import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgame1Component } from './sgame1.component';

describe('Sgame1Component', () => {
  let component: Sgame1Component;
  let fixture: ComponentFixture<Sgame1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sgame1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
