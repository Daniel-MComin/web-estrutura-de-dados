import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { PilhaComponent } from '../../pages/pilha/pilha.component';

interface EstruturaCard {
  name: string;
  description: string;
  iconPath: string;
  link: string;
}

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink, RouterModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  estruturas: EstruturaCard[] = [
    {
      name: 'Lista Encadeada',
      description: 'Sequência de nós, onde cada nó aponta para o próximo.',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      link: '/lista-encadeada'
    },
    {
      name: 'Pilha',
      description: 'LIFO (Last-In, First-Out).',
      iconPath: 'M4 7v10m4-10v10m4-10v10m4-10v10M2 21h20',
      link: '/pilha'
    },
    {
      name: 'Fila',
      description: 'FIFO (First-In, First-Out).',
      iconPath: 'M17 8l4 4m0 0l-4 4m4-4H3',
      link: '/fila'
    },
    {
      name: 'Treap',
      description: 'Combinação das propriedades de Árvore e Heap.',
      iconPath: 'M10 4v16m-4-12h4m6 0h4m-10 6h4m6 0h4m-10 6h4m6 0h4',
      link: '/treap'
    },
    {
      name: 'Skip-List',
      description: 'Estrutura probabilistica que organiza elementos em múltiplos níveis.',
      iconPath: 'M10 4v16m-4-12h4m6 0h4m-10 6h4m6 0h4m-10 6h4m6 0h4',
      link: '/skiplist'
    },
     {
      name: 'Busca Linear',
      description: 'Busca sequencial elemento por elemento.',
      iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      link: '/buscalinear'
    },
    
  ];
}
