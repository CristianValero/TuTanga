import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaNavbarComponent } from './tutanga-navbar.component';

describe('TutangaNavbarComponent', () => {
  let component: TutangaNavbarComponent;
  let fixture: ComponentFixture<TutangaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
