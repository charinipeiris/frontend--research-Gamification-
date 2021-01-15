import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game002Component } from './game002.component';

describe('Game002Component', () => {
  let component: Game002Component;
  let fixture: ComponentFixture<Game002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
