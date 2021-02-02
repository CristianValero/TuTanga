import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaFooterComponent } from './tutanga-footer.component';

describe('TutangaFooterComponent', () => {
  let component: TutangaFooterComponent;
  let fixture: ComponentFixture<TutangaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
