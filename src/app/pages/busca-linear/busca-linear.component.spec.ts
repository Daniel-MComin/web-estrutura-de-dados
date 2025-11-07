import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaLinearComponent } from './busca-linear.component';

describe('BuscaLinearComponent', () => {
  let component: BuscaLinearComponent;
  let fixture: ComponentFixture<BuscaLinearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaLinearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
