import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shapesg21Component } from './shapesg21.component';

describe('Shapesg21Component', () => {
  let component: Shapesg21Component;
  let fixture: ComponentFixture<Shapesg21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shapesg21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shapesg21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
