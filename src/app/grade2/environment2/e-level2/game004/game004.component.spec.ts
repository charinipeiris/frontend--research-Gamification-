import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game004Component } from './game004.component';

describe('Game004Component', () => {
  let component: Game004Component;
  let fixture: ComponentFixture<Game004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
