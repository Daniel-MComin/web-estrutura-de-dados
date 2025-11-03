import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreapComponent } from './treap.component';

describe('TreapComponent', () => {
  let component: TreapComponent;
  let fixture: ComponentFixture<TreapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
