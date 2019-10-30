import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketPage } from './cricket.page';

describe('CricketPage', () => {
  let component: CricketPage;
  let fixture: ComponentFixture<CricketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
