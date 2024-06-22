import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFavoritePageComponent } from './movie-favorite-page.component';

describe('MovieFavoritePageComponent', () => {
  let component: MovieFavoritePageComponent;
  let fixture: ComponentFixture<MovieFavoritePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFavoritePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieFavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
