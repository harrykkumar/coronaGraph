import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wave2021Component } from './wave2021.component';

describe('Wave2021Component', () => {
  let component: Wave2021Component;
  let fixture: ComponentFixture<Wave2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wave2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wave2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
