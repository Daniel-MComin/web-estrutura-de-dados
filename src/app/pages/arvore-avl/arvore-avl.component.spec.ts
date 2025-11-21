import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreAvlComponent } from './arvore-avl.component';

describe('ArvoreAvlComponent', () => {
  let component: ArvoreAvlComponent;
  let fixture: ComponentFixture<ArvoreAvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArvoreAvlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArvoreAvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
