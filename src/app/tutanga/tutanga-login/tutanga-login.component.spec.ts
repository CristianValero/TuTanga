import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaLoginComponent } from './tutanga-login.component';

describe('TutangaLoginComponent', () => {
  let component: TutangaLoginComponent;
  let fixture: ComponentFixture<TutangaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
