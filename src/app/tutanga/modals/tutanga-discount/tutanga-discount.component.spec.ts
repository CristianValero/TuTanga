import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaDiscountComponent } from './tutanga-discount.component';

describe('TutangaDiscountComponent', () => {
  let component: TutangaDiscountComponent;
  let fixture: ComponentFixture<TutangaDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
