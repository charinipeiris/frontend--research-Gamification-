import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sentences1L2Component } from './sentences1-l2.component';

describe('Sentences1L2Component', () => {
  let component: Sentences1L2Component;
  let fixture: ComponentFixture<Sentences1L2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sentences1L2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sentences1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
