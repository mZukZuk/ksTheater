import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../services/movies/movies.service';
import {Subscription} from 'rxjs';
import {Movie} from '../models/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  moviesSubscriber: Subscription;
  id: string;
  isLoading: boolean;
  isError: boolean;
  movie: Movie;
  properties: string[] = ['title', 'id' , 'rating', 'released'];

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.isError = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.moviesSubscriber = this.moviesService.getMovie(this.id)
      .subscribe( (movies: Movie[]) => {
        this.isLoading = false;
        if (movies && movies.length) {
          this.movie = movies[0];
        } else {
          this.isError = true;
        }

      }, error => {
        this.isLoading = false;
        this.isError = true;
        console.error('failed to load data:', error);
      });
  }

  ngOnDestroy(): void {
    this.moviesSubscriber.unsubscribe();
  }

}
