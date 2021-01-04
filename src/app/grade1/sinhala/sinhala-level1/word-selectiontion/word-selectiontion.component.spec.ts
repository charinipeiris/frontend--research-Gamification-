import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSelectiontionComponent } from './word-selectiontion.component';

describe('WordSelectiontionComponent', () => {
  let component: WordSelectiontionComponent;
  let fixture: ComponentFixture<WordSelectiontionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSelectiontionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSelectiontionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
