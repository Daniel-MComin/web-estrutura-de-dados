import { CommonModule, } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fila',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './fila.component.html',
  styleUrl: './fila.component.css'
})
export class FilaComponent {
  queue: number[] = [7, 8, 9, 10];
  inputValue: string = "";

  enqueue() {
    if (!this.inputValue) {
      // this.toast.error("Digite um valor para adicionar na fila");
      return;
    }
    const numValue = parseInt(this.inputValue, 10);
    if (!isNaN(numValue)) {
      this.queue.push(numValue);
      this.inputValue = "";
      // this.toast.success("Elemento adicionado na fila!");
    }
  }

  dequeue() {
    if (this.queue.length === 0) {
      // this.toast.error("Fila vazia!");
      return;
    }
    const dequeuedValue = this.queue.shift(); // shift() remove o primeiro elemento
    // this.toast.success(`Removido da fila: ${dequeuedValue}`);
  }
}
