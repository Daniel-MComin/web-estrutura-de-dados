import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Node {
  value: number;
  next: number | null;
}

@Component({
  selector: 'app-lista-encadeada',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-encadeada.component.html',
  styleUrl: './lista-encadeada.component.css'
})
export class ListaEncadeadaComponent {
  nodes: Node[] = [];
  inputValue = '';
  head: number | null = null;

  insertAtBeginning() {
    if (!this.inputValue) return;
    const newNode: Node = { value: parseInt(this.inputValue, 10), next: this.head };
    this.nodes = [...this.nodes, newNode];
    this.head = this.nodes.length - 1;
    this.inputValue = '';
  }

  insertAtEnd() {
    if (!this.inputValue) return;
    const newNode: Node = { value: parseInt(this.inputValue, 10), next: null };

    if (this.head === null) {
      this.nodes = [newNode];
      this.head = 0;
    } else {
      let current = this.head;
      const updated = [...this.nodes];
      while (updated[current].next !== null) current = updated[current].next!;
      updated[current].next = updated.length;
      this.nodes = [...updated, newNode];
    }
    this.inputValue = '';
  }

  deleteFirst() {
    if (this.head === null) return;
    this.head = this.nodes[this.head].next;
  }

  getOrderedList(): Node[] {
    if (this.head === null) return [];
    const ordered: Node[] = [];
    let current: number | null = this.head;
    while (current !== null) {
      ordered.push(this.nodes[current]);
      current = this.nodes[current].next;
    }
    return ordered;
  }
}
