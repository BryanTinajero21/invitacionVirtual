import { Component } from '@angular/core';
import { LugarEventoComponent } from '../lugar-evento/lugar-evento.component';
import { CodigoVestimentaComponent } from '../codigo-vestimenta/codigo-vestimenta.component';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [LugarEventoComponent, CodigoVestimentaComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {

}
