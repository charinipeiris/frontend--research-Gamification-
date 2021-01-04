import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSelectiontion1Component } from './word-selectiontion1.component';

describe('WordSelectiontion1Component', () => {
  let component: WordSelectiontion1Component;
  let fixture: ComponentFixture<WordSelectiontion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSelectiontion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSelectiontion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
