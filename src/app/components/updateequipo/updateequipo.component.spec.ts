import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateequipoComponent } from './updateequipo.component';

describe('UpdateequipoComponent', () => {
  let component: UpdateequipoComponent;
  let fixture: ComponentFixture<UpdateequipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateequipoComponent]
    });
    fixture = TestBed.createComponent(UpdateequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
