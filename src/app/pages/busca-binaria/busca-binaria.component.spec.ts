import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaBinariaComponent } from './busca-binaria.component';

describe('BuscaBinariaComponent', () => {
  let component: BuscaBinariaComponent;
  let fixture: ComponentFixture<BuscaBinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaBinariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaBinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
