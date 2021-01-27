import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2G2L1Component } from './game2-g2-l1.component';

describe('Game2G2L1Component', () => {
  let component: Game2G2L1Component;
  let fixture: ComponentFixture<Game2G2L1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2G2L1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2G2L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
