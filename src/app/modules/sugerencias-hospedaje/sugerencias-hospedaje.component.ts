import { Component } from '@angular/core';

@Component({
  selector: 'app-sugerencias-hospedaje',
  standalone: true,
  imports: [],
  templateUrl: './sugerencias-hospedaje.component.html',
  styleUrl: './sugerencias-hospedaje.component.scss'
})
export class SugerenciasHospedajeComponent {

  public abrirEnlace(hotel: string): void {
    let url = '';
    if (hotel === 'guardian') {
      url = 'https://maps.app.goo.gl/yh2vErCQtpq4MdU38?g_st=iw';
    } else if (hotel === 'amanecer') {
      url = 'https://maps.app.goo.gl/5wRPy6ZXT2D6wXQv9?g_st=com.google.maps.preview.copy';
    } else if (hotel === 'sierranorte') {
      url = 'https://maps.app.goo.gl/K2kLj7pQF5ugHhuGA?g_st=com.google.maps.preview.copy'

    }


    window.open(url, '_blank');
  }

}
