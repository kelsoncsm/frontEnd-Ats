/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListVagasComponent } from './list-vagas.component';

describe('ListVagasComponent', () => {
  let component: ListVagasComponent;
  let fixture: ComponentFixture<ListVagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
