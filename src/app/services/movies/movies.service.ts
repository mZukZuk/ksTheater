import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies$: ReplaySubject<Movie[]>;
  private readonly MOVIES_URL = '/movies'; // http://localhost:3000/movies/:id
  constructor(private http: HttpClient) {

    this.movies$ =  new ReplaySubject(1);
    this.getMovies();
  }

  getMovie(id: string) {
    return this.http.get(this.MOVIES_URL + '/' + id);
  }

  getMovies() {
    this.http.get(this.MOVIES_URL).subscribe( (data: Movie[]) => {
      this.movies$.next(data.map( movie => {
        movie.synopsis = this.clearString(movie.synopsis);// remove weird comment at
        // the end of the synopsis
        return movie;
      }));
    }, error => {
      this.movies$.error(error);
    });
  }

  getMoviesObservable() {
    return this.movies$.asObservable();
  }

  clearString(str) {
    if (str) {
     return str.replace(/<br>.*<\/b>/, '' );
    }
    return null;
  }


}
