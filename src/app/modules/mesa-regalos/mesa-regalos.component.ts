import { Component } from '@angular/core';

@Component({
  selector: 'app-mesa-regalos',
  standalone: true,
  imports: [],
  templateUrl: './mesa-regalos.component.html',
  styleUrl: './mesa-regalos.component.scss'
})
export class MesaRegalosComponent {

  public abrirEnlace(tienda: string): void {
    let url = '';
    if (tienda === 'liverpool') {
      url = 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51606064';
    } else if (tienda === 'palacio') {
      url = 'https://www.elpalaciodehierro.com/buscar?eventId=393432';
    }

    window.open(url, '_blank');
  }
}