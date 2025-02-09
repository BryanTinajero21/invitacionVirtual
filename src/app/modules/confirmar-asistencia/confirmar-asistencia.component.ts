import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmar-asistencia',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-asistencia.component.html',
  styleUrl: './confirmar-asistencia.component.scss'
})
export class ConfirmarAsistenciaComponent {

  public confirmarAsistencia(): void {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSerpymffxWjYq6hKM_ymGQnCxmFSydlp1mLv3UoypLVi2senQ/viewform';
    window.open(url, '_blank'); 
  }
}
