/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormVagasComponent } from './form-vagas.component';

describe('FormVagasComponent', () => {
  let component: FormVagasComponent;
  let fixture: ComponentFixture<FormVagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
