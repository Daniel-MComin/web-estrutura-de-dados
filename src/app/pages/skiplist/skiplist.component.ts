import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface SkipNode {
  value: number;
  level: number;
}

@Component({
  selector: 'app-skiplist',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './skiplist.component.html',
  styleUrl: './skiplist.component.css'
})
export class SkiplistComponent {
   nodes: SkipNode[] = [
    { value: 3, level: 3 },
    { value: 6, level: 1 },
    { value: 7, level: 2 },
    { value: 9, level: 1 },
    { value: 12, level: 3 },
    { value: 19, level: 2 },
    { value: 21, level: 1 },
  ];
  inputValue = '';
  searchValue = '';
  highlightedValue: number | null = null;
  private highlightTimer: any;

  get maxLevel(): number {
    return Math.max(4, ...this.nodes.map(n => n.level));
  }
  get levels(): number[] {
    return Array.from({ length: this.maxLevel }, (_, i) => this.maxLevel - i);
  }
  nodesForLevel(level: number): SkipNode[] {
    return this.nodes.filter(n => n.level >= level);
  }
  getRandomLevel(): number {
    let level = 1;
    while (Math.random() < 0.5 && level < 4) level++;
    return level;
  }
  handleInsert() {
    const value = parseInt(this.inputValue, 10);
    if (isNaN(value)) return;
    const level = this.getRandomLevel();
    this.nodes = [...this.nodes, { value, level }].sort((a, b) => a.value - b.value);
    this.inputValue = '';
  }
  handleSearch() {
    const value = parseInt(this.searchValue, 10);
    if (isNaN(value)) return;
    const found = this.nodes.find(n => n.value === value);
    if (found) {
      this.highlightedValue = value;
      clearTimeout(this.highlightTimer);
      this.highlightTimer = setTimeout(() => (this.highlightedValue = null), 2000);
    } else {
      this.highlightedValue = null;
    }
  }
  handleDelete(value: number) {
    this.nodes = this.nodes.filter(n => n.value !== value);
    if (this.highlightedValue === value) this.highlightedValue = null;
  }

}
