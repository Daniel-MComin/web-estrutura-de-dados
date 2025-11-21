import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface HashEntry {
  key: string;
  value: string;
}

@Component({
  selector: 'app-hash-encadeado',
  imports: [CommonModule, FormsModule, RouterModule ],
  templateUrl: './hash-encadeado.component.html',
  styleUrl: './hash-encadeado.component.css'
})
export class HashEncadeadoComponent {

   table: (HashEntry[] | null)[] = Array(10).fill(null);
  keyInput = '';
  valueInput = '';
  searchKey = '';
  lastSearchResult: string | null = null;

  hashFunction(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  insert() {
    if (!this.keyInput || !this.valueInput) return;
    const idx = this.hashFunction(this.keyInput);
    const newTable = [...this.table];
    if (newTable[idx] === null) newTable[idx] = [];
    const bucket = newTable[idx]!;
    const existing = bucket.find(e => e.key === this.keyInput);
    if (existing) {
      existing.value = this.valueInput;
    } else {
      bucket.push({ key: this.keyInput, value: this.valueInput });
    }
    this.table = newTable;
    this.keyInput = '';
    this.valueInput = '';
  }

  search() {
    if (!this.searchKey) return;
    const idx = this.hashFunction(this.searchKey);
    const bucket = this.table[idx];
    if (bucket) {
      const entry = bucket.find(e => e.key === this.searchKey);
      this.lastSearchResult = entry ? entry.value : null;
    } else {
      this.lastSearchResult = null;
    }
  }

  remove(key: string) {
    const idx = this.hashFunction(key);
    const bucket = this.table[idx];
    if (!bucket) return;
    const filtered = bucket.filter(e => e.key !== key);
    this.table[idx] = filtered.length ? filtered : null;
    if (this.searchKey === key) this.lastSearchResult = null;
  }

}
