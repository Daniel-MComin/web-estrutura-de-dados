import { Routes } from '@angular/router';
import { PilhaComponent } from './pages/pilha/pilha.component';
import { HomeComponent } from './pages/home/home.component';
import { FilaComponent } from './pages/fila/fila.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pilha', component: PilhaComponent },
  { path: 'fila', component: FilaComponent }
];

