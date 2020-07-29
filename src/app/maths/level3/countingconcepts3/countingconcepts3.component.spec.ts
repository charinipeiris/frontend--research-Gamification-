import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Countingconcepts3Component } from './countingconcepts3.component';

describe('Countingconcepts3Component', () => {
  let component: Countingconcepts3Component;
  let fixture: ComponentFixture<Countingconcepts3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Countingconcepts3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Countingconcepts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
