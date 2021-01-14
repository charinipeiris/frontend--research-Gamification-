import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinhalaintro2Component } from './sinhalaintro2.component';

describe('Sinhalaintro2Component', () => {
  let component: Sinhalaintro2Component;
  let fixture: ComponentFixture<Sinhalaintro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinhalaintro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinhalaintro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
