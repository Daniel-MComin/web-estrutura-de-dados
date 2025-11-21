import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRedBlackComponent } from './arvore-red-black.component';

describe('ArvoreRedBlackComponent', () => {
  let component: ArvoreRedBlackComponent;
  let fixture: ComponentFixture<ArvoreRedBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArvoreRedBlackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArvoreRedBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
