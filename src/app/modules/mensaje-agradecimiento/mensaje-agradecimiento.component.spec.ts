import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeAgradecimientoComponent } from './mensaje-agradecimiento.component';

describe('MensajeAgradecimientoComponent', () => {
  let component: MensajeAgradecimientoComponent;
  let fixture: ComponentFixture<MensajeAgradecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeAgradecimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeAgradecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
