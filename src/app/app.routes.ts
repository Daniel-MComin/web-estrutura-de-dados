import { Routes } from '@angular/router';
import { PilhaComponent } from './pages/pilha/pilha.component';
import { HomeComponent } from './pages/home/home.component';
import { FilaComponent } from './pages/fila/fila.component';
import { TreapComponent } from './pages/treap/treap.component';
import { SkiplistComponent } from './pages/skiplist/skiplist.component';
import { BuscaLinearComponent } from './pages/busca-linear/busca-linear.component';
import { ListaEncadeadaComponent } from './pages/lista-encadeada/lista-encadeada.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pilha', component: PilhaComponent },
  { path: 'fila', component: FilaComponent },
  { path: 'treap', component: TreapComponent },
  { path: 'skiplist', component: SkiplistComponent },
  { path: 'buscalinear', component: BuscaLinearComponent },
  { path: 'listaencadeada', component: ListaEncadeadaComponent },

];

