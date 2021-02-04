import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutangaRegisterComponent } from './tutanga-register.component';

describe('TutangaRegisterComponent', () => {
  let component: TutangaRegisterComponent;
  let fixture: ComponentFixture<TutangaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutangaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutangaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
