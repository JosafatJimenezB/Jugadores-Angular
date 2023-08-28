import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoequipoComponent } from './nuevoequipo.component';

describe('NuevoequipoComponent', () => {
  let component: NuevoequipoComponent;
  let fixture: ComponentFixture<NuevoequipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoequipoComponent]
    });
    fixture = TestBed.createComponent(NuevoequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
