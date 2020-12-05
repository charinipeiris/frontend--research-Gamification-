import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sentences1Component } from './sentences1.component';

describe('Sentences1Component', () => {
  let component: Sentences1Component;
  let fixture: ComponentFixture<Sentences1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sentences1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sentences1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
