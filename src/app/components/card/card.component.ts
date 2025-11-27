import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";

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
   // {
   //   name: 'Treap',
   //   description: 'Combinação das propriedades de Árvore e Heap.',
    //  iconPath: 'M10 4v16m-4-12h4m6 0h4m-10 6h4m6 0h4m-10 6h4m6 0h4',
   //   link: '/treap'
  //  },
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
      link: '/busca-linear'
    },
    {
      name: 'Busca Binária',
      description: 'Busca em arrays ordenados dividindo o espaço de busca pela metade.',
      iconPath: 'M3 12h18M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z',
      link: '/busca-binaria'
    },
    {
      name: 'Árvore AVL',
      description: 'Árvore binária de busca auto-balanceada com fator de balanceamento',
      iconPath: 'M12 3v6M12 9l-4 4M12 9l4 4M6 21h12',
      link: '/arvore-avl'
    },
    {
      name: 'Hash Encadeado',
      description: 'Tabela hash com tratamento de colisões utilizando listas encadeadas.',
      iconPath: 'M5.25 8.25h13.5M4.5 15.75h13.5M9 3.75L7.5 20.25M16.5 3.75L15 20.25',
      link: '/hash-encadeado'
    },
    {
      name: 'Hash com Endereçamento Aberto',
      description: 'Tabela hash com tratamento de colisões direto na tabela',
      iconPath: 'M3.75 3.75h7.5v7.5h-7.5zM12.75 3.75h7.5v7.5h-7.5zM3.75 12.75h7.5v7.5h-7.5zM12.75 12.75h7.5v7.5h-7.5z',
      link: '/hash-aberto'
    },
    {
      name: 'Hash Dinâmico (ReHash)',
      description: 'Busca sequencial elemento por elemento.',
      iconPath: 'M4 7h8m0 0l-3-3m3 3l-3 3M20 17h-8m0 0l3 3m-3-3l3-3',
      link: '/hash-dinamico'
    },
    {
      name: 'Árvore Rubro Negra',
      description: 'Árvore binária auto-balanceada usando cores para manter equilíbrio.',
      iconPath: 'M12 4v5M12 9l-5 5M12 9l5 5M7 20h10',
      link: '/arvore-red-black'
    },
     {
      name: 'Árvore B',
      description: 'Árvore binária auto-balanceada usando cores para manter equilíbrio.',
      iconPath: 'M12 4v5M12 9l-5 5M12 9l5 5M7 20h10',
      link: '/arvore-b'
    },
  ];
}
