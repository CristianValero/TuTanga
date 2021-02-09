import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaSuccessComponent } from './tutanga-success.component';

describe('TutangaSuccessComponent', () => {
  let component: TutangaSuccessComponent;
  let fixture: ComponentFixture<TutangaSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
