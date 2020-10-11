import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgame2Component } from './sgame2.component';

describe('Sgame2Component', () => {
  let component: Sgame2Component;
  let fixture: ComponentFixture<Sgame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sgame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
