import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-busca-linear',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './busca-linear.component.html',
  styleUrl: './busca-linear.component.css'
})
export class BuscaLinearComponent {
  array: number[] = [64, 34, 25, 12, 22, 11, 90, 88, 45, 50];
  searchValue = '';
  currentIndex: number | null = null;
  foundIndex: number | null = null;
  isSearching = false;

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async linearSearch(target: number) {
    this.isSearching = true;
    this.foundIndex = null;

    for (let i = 0; i < this.array.length; i++) {
      this.currentIndex = i;
      await this.sleep(500);

      if (this.array[i] === target) {
        this.foundIndex = i;
        this.currentIndex = null;
        this.isSearching = false;
        return;
      }
    }

    this.currentIndex = null;
    this.isSearching = false;
  }

  handleSearch() {
    if (!this.searchValue) return;
    const value = parseInt(this.searchValue, 10);
    if (isNaN(value)) return;
    this.linearSearch(value);
  }

  resetSearch() {
    this.currentIndex = null;
    this.foundIndex = null;
    this.searchValue = '';
  }

}
