import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaCartComponent } from './tutanga-cart.component';

describe('TutangaCartComponent', () => {
  let component: TutangaCartComponent;
  let fixture: ComponentFixture<TutangaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
