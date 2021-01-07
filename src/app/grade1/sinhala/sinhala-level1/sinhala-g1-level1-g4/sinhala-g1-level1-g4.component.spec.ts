import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaG1Level1G4Component } from './sinhala-g1-level1-g4.component';

describe('SinhalaG1Level1G4Component', () => {
  let component: SinhalaG1Level1G4Component;
  let fixture: ComponentFixture<SinhalaG1Level1G4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaG1Level1G4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaG1Level1G4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
