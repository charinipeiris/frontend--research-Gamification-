import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgame4Component } from './sgame4.component';

describe('Sgame4Component', () => {
  let component: Sgame4Component;
  let fixture: ComponentFixture<Sgame4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sgame4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
