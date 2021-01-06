import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSelectionL2Component } from './word-selection-l2.component';

describe('WordSelectionL2Component', () => {
  let component: WordSelectionL2Component;
  let fixture: ComponentFixture<WordSelectionL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSelectionL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSelectionL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
