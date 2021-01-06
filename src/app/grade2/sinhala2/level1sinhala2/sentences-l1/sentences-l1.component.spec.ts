import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesL1Component } from './sentences-l1.component';

describe('SentencesL1Component', () => {
  let component: SentencesL1Component;
  let fixture: ComponentFixture<SentencesL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentencesL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencesL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
