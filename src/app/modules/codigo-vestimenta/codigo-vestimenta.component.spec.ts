import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoVestimentaComponent } from './codigo-vestimenta.component';

describe('CodigoVestimentaComponent', () => {
  let component: CodigoVestimentaComponent;
  let fixture: ComponentFixture<CodigoVestimentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoVestimentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoVestimentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
