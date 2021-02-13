import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaProfileComponent } from './tutanga-profile.component';

describe('TutangaProfileComponent', () => {
  let component: TutangaProfileComponent;
  let fixture: ComponentFixture<TutangaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
