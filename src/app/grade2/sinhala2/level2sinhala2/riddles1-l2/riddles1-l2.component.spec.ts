import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Riddles1L2Component } from './riddles1-l2.component';

describe('Riddles1L2Component', () => {
  let component: Riddles1L2Component;
  let fixture: ComponentFixture<Riddles1L2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Riddles1L2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Riddles1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
