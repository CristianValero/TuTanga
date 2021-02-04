import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaProductsComponent } from './tutanga-products.component';

describe('TutangaProductosComponent', () => {
  let component: TutangaProductsComponent;
  let fixture: ComponentFixture<TutangaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
