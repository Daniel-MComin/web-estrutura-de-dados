import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pilha',
  imports: [CommonModule, NgClass, FormsModule, RouterModule],
  templateUrl: './pilha.component.html',
  styleUrl: './pilha.component.css'
})
export class PilhaComponent {
  stack: number[] = [10, 25, 7];
  inputValue: string = "";

  push() {
    const numValue = Number(this.inputValue);
    if (this.inputValue && !isNaN(numValue)) {
      this.stack.push(numValue);
      this.inputValue = "";

    } else {
      // this.toastr.error("Digite um número válido");
    }
  }

  pop() {
    if (this.stack.length === 0) {
      // this.toastr.error("A pilha está vazia!");
      return;
    }
    const poppedValue = this.stack.pop();
    // this.toastr.success(`Elemento ${poppedValue} desempilhado (pop)!`);
  }

  peek() {
    if (this.stack.length === 0) {
      // this.toastr.error("A pilha está vazia!");
      return;
    }
    const topValue = this.stack[this.stack.length - 1];
    // this.toastr.info(`Topo da pilha: ${topValue}`);
  }

  clear() {
    this.stack = [];
    // this.toastr.success("Pilha limpa!");
  }
}

