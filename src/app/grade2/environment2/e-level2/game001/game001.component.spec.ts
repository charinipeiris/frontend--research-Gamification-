import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game001Component } from './game001.component';

describe('Game001Component', () => {
  let component: Game001Component;
  let fixture: ComponentFixture<Game001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
