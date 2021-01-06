import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSelectionL1Component } from './word-selection-l1.component';

describe('WordSelectionL1Component', () => {
  let component: WordSelectionL1Component;
  let fixture: ComponentFixture<WordSelectionL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSelectionL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSelectionL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
