import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashDinamicoComponent } from './hash-dinamico.component';

describe('HashDinamicoComponent', () => {
  let component: HashDinamicoComponent;
  let fixture: ComponentFixture<HashDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
