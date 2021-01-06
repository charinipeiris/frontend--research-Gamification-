import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsL1eComponent } from './words-l1e.component';

describe('WordsL1eComponent', () => {
  let component: WordsL1eComponent;
  let fixture: ComponentFixture<WordsL1eComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsL1eComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsL1eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
