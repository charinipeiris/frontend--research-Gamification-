import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game005Component } from './game005.component';

describe('Game005Component', () => {
  let component: Game005Component;
  let fixture: ComponentFixture<Game005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
