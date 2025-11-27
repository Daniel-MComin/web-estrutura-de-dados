import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAprofundamentoComponent } from './card-aprofundamento.component';

describe('CardAprofundamentoComponent', () => {
  let component: CardAprofundamentoComponent;
  let fixture: ComponentFixture<CardAprofundamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAprofundamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAprofundamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
