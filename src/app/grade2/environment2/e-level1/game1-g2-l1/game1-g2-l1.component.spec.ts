import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1G2L1Component } from './game1-g2-l1.component';

describe('Game1G2L1Component', () => {
  let component: Game1G2L1Component;
  let fixture: ComponentFixture<Game1G2L1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game1G2L1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game1G2L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
