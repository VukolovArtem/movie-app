import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRateMoviePageComponent } from './top-rate-movie-page.component';

describe('TopRateMoviePageComponent', () => {
  let component: TopRateMoviePageComponent;
  let fixture: ComponentFixture<TopRateMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRateMoviePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRateMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
