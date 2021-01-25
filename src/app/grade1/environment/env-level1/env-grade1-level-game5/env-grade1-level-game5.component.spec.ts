import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1LevelGame5Component } from './env-grade1-level-game5.component';

describe('EnvGrade1LevelGame5Component', () => {
  let component: EnvGrade1LevelGame5Component;
  let fixture: ComponentFixture<EnvGrade1LevelGame5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1LevelGame5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1LevelGame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
