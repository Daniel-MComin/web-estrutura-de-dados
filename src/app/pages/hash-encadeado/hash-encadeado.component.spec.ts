import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashEncadeadoComponent } from './hash-encadeado.component';

describe('HashEncadeadoComponent', () => {
  let component: HashEncadeadoComponent;
  let fixture: ComponentFixture<HashEncadeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashEncadeadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashEncadeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
