import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poems1Component } from './poems1.component';

describe('Poems1Component', () => {
  let component: Poems1Component;
  let fixture: ComponentFixture<Poems1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poems1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poems1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
