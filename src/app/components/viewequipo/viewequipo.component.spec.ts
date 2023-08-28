import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewequipoComponent } from './viewequipo.component';

describe('ViewequipoComponent', () => {
  let component: ViewequipoComponent;
  let fixture: ComponentFixture<ViewequipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewequipoComponent]
    });
    fixture = TestBed.createComponent(ViewequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
