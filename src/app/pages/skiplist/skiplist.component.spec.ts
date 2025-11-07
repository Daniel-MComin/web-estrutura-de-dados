import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiplistComponent } from './skiplist.component';

describe('SkiplistComponent', () => {
  let component: SkiplistComponent;
  let fixture: ComponentFixture<SkiplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkiplistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
