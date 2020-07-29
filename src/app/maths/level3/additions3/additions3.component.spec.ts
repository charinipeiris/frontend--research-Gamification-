import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Additions3Component } from './additions3.component';

describe('Additions3Component', () => {
  let component: Additions3Component;
  let fixture: ComponentFixture<Additions3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Additions3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Additions3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
