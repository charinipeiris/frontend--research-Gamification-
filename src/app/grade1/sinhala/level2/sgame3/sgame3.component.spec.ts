import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgame3Component } from './sgame3.component';

describe('Sgame3Component', () => {
  let component: Sgame3Component;
  let fixture: ComponentFixture<Sgame3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sgame3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
