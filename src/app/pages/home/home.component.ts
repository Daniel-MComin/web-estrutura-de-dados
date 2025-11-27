import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { CardAprofundamentoComponent } from '../../components/card-aprofundamento/card-aprofundamento.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule, CardAprofundamentoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
