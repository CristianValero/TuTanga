import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaProductosComponent } from './tutanga-productos.component';

describe('TutangaProductosComponent', () => {
  let component: TutangaProductosComponent;
  let fixture: ComponentFixture<TutangaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
