import { Routes } from '@angular/router';
import { PilhaComponent } from './pages/pilha/pilha.component';
import { HomeComponent } from './pages/home/home.component';
import { FilaComponent } from './pages/fila/fila.component';
import { TreapComponent } from './pages/treap/treap.component';
import { SkiplistComponent } from './pages/skiplist/skiplist.component';
import { BuscaLinearComponent } from './pages/busca-linear/busca-linear.component';
import { ListaEncadeadaComponent } from './pages/lista-encadeada/lista-encadeada.component';
import { BuscaBinariaComponent } from './pages/busca-binaria/busca-binaria.component';
import { ArvoreAvlComponent } from './pages/arvore-avl/arvore-avl.component';
import { HashEncadeadoComponent } from './pages/hash-encadeado/hash-encadeado.component';
import { HashAbertoComponent } from './pages/hash-aberto/hash-aberto.component';
import { ArvoreRedBlackComponent } from './pages/arvore-red-black/arvore-red-black.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pilha', component: PilhaComponent },
  { path: 'fila', component: FilaComponent },
 // { path: 'treap', component: TreapComponent },
  { path: 'skiplist', component: SkiplistComponent },
  { path: 'busca-linear', component: BuscaLinearComponent },
  { path: 'lista-encadeada', component: ListaEncadeadaComponent },
  { path: 'busca-binaria', component: BuscaBinariaComponent },
  { path: 'arvore-avl', component: ArvoreAvlComponent },
  { path: 'hash-encadeado', component: HashEncadeadoComponent },
  { path: 'hash-aberto', component: HashAbertoComponent },
  { path: 'arvore-red-black', component: ArvoreRedBlackComponent },
  

];

