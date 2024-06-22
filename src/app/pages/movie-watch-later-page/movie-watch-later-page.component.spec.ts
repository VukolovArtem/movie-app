import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWatchLaterPageComponent } from './movie-watch-later-page.component';

describe('MovieWatchLaterPageComponent', () => {
  let component: MovieWatchLaterPageComponent;
  let fixture: ComponentFixture<MovieWatchLaterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieWatchLaterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieWatchLaterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
