import { Routes } from '@angular/router';
import { PresentacionComponent } from './modules/presentacion/presentacion.component';

export const routes: Routes = [
    { path: '', redirectTo: 'presentación', pathMatch: 'full' },
    { path: 'presentación', component: PresentacionComponent },
];

