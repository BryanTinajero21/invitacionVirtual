import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasHospedajeComponent } from './sugerencias-hospedaje.component';

describe('SugerenciasHospedajeComponent', () => {
  let component: SugerenciasHospedajeComponent;
  let fixture: ComponentFixture<SugerenciasHospedajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugerenciasHospedajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugerenciasHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
