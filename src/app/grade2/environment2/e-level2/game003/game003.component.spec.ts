import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game003Component } from './game003.component';

describe('Game003Component', () => {
  let component: Game003Component;
  let fixture: ComponentFixture<Game003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
