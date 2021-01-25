import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1Level2Game5Component } from './env-grade1-level2-game5.component';

describe('EnvGrade1Level2Game5Component', () => {
  let component: EnvGrade1Level2Game5Component;
  let fixture: ComponentFixture<EnvGrade1Level2Game5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1Level2Game5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1Level2Game5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
