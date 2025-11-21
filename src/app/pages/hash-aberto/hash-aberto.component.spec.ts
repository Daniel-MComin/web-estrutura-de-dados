import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashAbertoComponent } from './hash-aberto.component';

describe('HashAbertoComponent', () => {
  let component: HashAbertoComponent;
  let fixture: ComponentFixture<HashAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashAbertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
