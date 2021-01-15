import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinhalintro2Component } from './sinhalintro2.component';

describe('Sinhalintro2Component', () => {
  let component: Sinhalintro2Component;
  let fixture: ComponentFixture<Sinhalintro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinhalintro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinhalintro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
