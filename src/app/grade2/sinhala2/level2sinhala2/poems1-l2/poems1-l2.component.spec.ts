import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poems1L2Component } from './poems1-l2.component';

describe('Poems1L2Component', () => {
  let component: Poems1L2Component;
  let fixture: ComponentFixture<Poems1L2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poems1L2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poems1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
