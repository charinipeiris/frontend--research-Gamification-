import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaIntroComponent } from './sinhala-intro.component';

describe('SinhalaIntroComponent', () => {
  let component: SinhalaIntroComponent;
  let fixture: ComponentFixture<SinhalaIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
