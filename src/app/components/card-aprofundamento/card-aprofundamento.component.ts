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
  selector: 'app-card-aprofundamento',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './card-aprofundamento.component.html',
  styleUrl: './card-aprofundamento.component.css'
})
export class CardAprofundamentoComponent {
  estruturas: EstruturaCard[] = [
   {
    name: 'Treap',
    description: 'Combinação das propriedades de Árvore e Heap.',
    iconPath: 'M10 4v16m-4-12h4m6 0h4m-10 6h4m6 0h4m-10 6h4m6 0h4',
    link: '/treap'
  },
  ];

}