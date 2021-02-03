import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaContactComponent } from './tutanga-contact.component';

describe('TutangaContactComponent', () => {
  let component: TutangaContactComponent;
  let fixture: ComponentFixture<TutangaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
