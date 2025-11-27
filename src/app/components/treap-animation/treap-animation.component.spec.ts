import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreapAnimationComponent } from './treap-animation.component';

describe('TreapAnimationComponent', () => {
  let component: TreapAnimationComponent;
  let fixture: ComponentFixture<TreapAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreapAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreapAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
