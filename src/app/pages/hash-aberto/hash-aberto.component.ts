import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type Slot = number | null | 'DELETED';

@Component({
  selector: 'app-hash-aberto',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hash-aberto.component.html',
  styleUrl: './hash-aberto.component.css'
})
export class HashAbertoComponent {

  readonly TABLE_SIZE = 11;
  table: Slot[] = Array(this.TABLE_SIZE).fill(null);
  inputValue = '';
  searchValue = '';
  highlightedIndex: number | null = null;

  hash(key: number): number {
    return key % this.TABLE_SIZE;
  }

  linearProbe(key: number, i: number): number {
    return (this.hash(key) + i) % this.TABLE_SIZE;
  }

  insertValue() {
    if (!this.inputValue) return;
    const value = parseInt(this.inputValue, 10);
    if (isNaN(value)) return;
    let i = 0;
    while (i < this.TABLE_SIZE) {
      const idx = this.linearProbe(value, i);
      if (this.table[idx] === null || this.table[idx] === 'DELETED') {
        this.table[idx] = value;
        this.highlight(idx);
        break;
      }
      i++;
    }
    this.inputValue = '';
  }

  searchValueFn() {
    if (!this.searchValue) return;
    const value = parseInt(this.searchValue, 10);
    if (isNaN(value)) return;
    let i = 0;
    while (i < this.TABLE_SIZE) {
      const idx = this.linearProbe(value, i);
      if (this.table[idx] === null) {
        this.highlightedIndex = null;
        return;
      }
      if (this.table[idx] === value) {
        this.highlight(idx, 2000);
        return;
      }
      i++;
    }
  }

  removeValue() {
    if (!this.searchValue) return;
    const value = parseInt(this.searchValue, 10);
    if (isNaN(value)) return;
    let i = 0;
    while (i < this.TABLE_SIZE) {
      const idx = this.linearProbe(value, i);
      if (this.table[idx] === null) break;
      if (this.table[idx] === value) {
        this.table[idx] = 'DELETED';
        this.highlight(idx);
        return;
      }
      i++;
    }
  }

  clearTable() {
    this.table = Array(this.TABLE_SIZE).fill(null);
    this.highlightedIndex = null;
  }

  factorUsed(): number {
    return this.table.filter(v => v !== null && v !== 'DELETED').length;
  }

  highlight(index: number, ms: number = 1500) {
    this.highlightedIndex = index;
    setTimeout(() => {
      if (this.highlightedIndex === index) this.highlightedIndex = null;
    }, ms);
  }

}
