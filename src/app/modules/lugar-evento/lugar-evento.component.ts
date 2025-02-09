import { Component } from '@angular/core';

@Component({
  selector: 'app-lugar-evento',
  standalone: true,
  imports: [],
  templateUrl: './lugar-evento.component.html',
  styleUrl: './lugar-evento.component.scss'
})
export class LugarEventoComponent {

  public visualizarUbicacion(): void {
    const url = 'https://maps.app.goo.gl/cJK4eURdT3DYJEeKA';
    window.open(url, '_blank'); 
  }
}