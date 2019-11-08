import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSectionComponent } from './footer-section.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FooterSectionComponent', () => {
  let component: FooterSectionComponent;
  let fixture: ComponentFixture<FooterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSectionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
