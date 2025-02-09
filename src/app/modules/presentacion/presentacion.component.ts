import { Component } from '@angular/core';
import { LugarEventoComponent } from '../lugar-evento/lugar-evento.component';
import { CodigoVestimentaComponent } from '../codigo-vestimenta/codigo-vestimenta.component';
import { ConfirmarAsistenciaComponent } from '../confirmar-asistencia/confirmar-asistencia.component';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [LugarEventoComponent, CodigoVestimentaComponent, ConfirmarAsistenciaComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {

}
