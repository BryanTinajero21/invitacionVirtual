import { Component } from '@angular/core';
import { LugarEventoComponent } from '../lugar-evento/lugar-evento.component';
import { CodigoVestimentaComponent } from '../codigo-vestimenta/codigo-vestimenta.component';
import { ConfirmarAsistenciaComponent } from '../confirmar-asistencia/confirmar-asistencia.component';
import { MesaRegalosComponent } from '../mesa-regalos/mesa-regalos.component';
import { SugerenciasHospedajeComponent } from '../sugerencias-hospedaje/sugerencias-hospedaje.component';
import { MensajeAgradecimientoComponent } from '../mensaje-agradecimiento/mensaje-agradecimiento.component';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [LugarEventoComponent, CodigoVestimentaComponent, ConfirmarAsistenciaComponent, MesaRegalosComponent, 
    SugerenciasHospedajeComponent, MensajeAgradecimientoComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {

}
