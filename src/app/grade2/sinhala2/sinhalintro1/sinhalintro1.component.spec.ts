import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinhalintro1Component } from './sinhalintro1.component';

describe('Sinhalintro1Component', () => {
  let component: Sinhalintro1Component;
  let fixture: ComponentFixture<Sinhalintro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinhalintro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinhalintro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
