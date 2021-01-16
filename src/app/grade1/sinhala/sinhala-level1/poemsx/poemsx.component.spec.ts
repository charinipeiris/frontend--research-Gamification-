import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemsxComponent } from './poemsx.component';

describe('PoemsxComponent', () => {
  let component: PoemsxComponent;
  let fixture: ComponentFixture<PoemsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemsxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
