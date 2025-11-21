import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-busca-binaria',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './busca-binaria.component.html',
  styleUrl: './busca-binaria.component.css'
})
export class BuscaBinariaComponent {
  array: number[] = [11, 12, 22, 25, 34, 45, 50, 64, 88, 90];
  searchValue = '';
  left: number | null = null;
  right: number | null = null;
  mid: number | null = null;
  foundIndex: number | null = null;
  isSearching = false;
  comparisons = 0;

  sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }

  async binarySearch(target: number) {
    this.isSearching = true;
    this.foundIndex = null;
    this.comparisons = 0;
    let l = 0;
    let r = this.array.length - 1;
    let comp = 0;

    while (l <= r) {
      this.left = l;
      this.right = r;
      const m = Math.floor((l + r) / 2);
      this.mid = m;
      comp++;
      this.comparisons = comp;

      await this.sleep(1000);

      if (this.array[m] === target) {
        this.foundIndex = m;
        this.clearPointers();
        this.isSearching = false;
        return;
      }

      if (this.array[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    this.clearPointers();
    this.isSearching = false;
  }

  handleSearch() {
    if (!this.searchValue || this.isSearching) return;
    const val = parseInt(this.searchValue, 10);
    if (isNaN(val)) return;
    this.binarySearch(val);
  }

  resetSearch() {
    if (this.isSearching) return;
    this.clearPointers();
    this.foundIndex = null;
    this.searchValue = '';
    this.comparisons = 0;
  }

  private clearPointers() {
    this.left = null;
    this.right = null;
    this.mid = null;
  }
}
