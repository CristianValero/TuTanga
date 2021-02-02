import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaNotfoundComponent } from './tutanga-notfound.component';

describe('TutangaNotfoundComponent', () => {
  let component: TutangaNotfoundComponent;
  let fixture: ComponentFixture<TutangaNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaNotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
