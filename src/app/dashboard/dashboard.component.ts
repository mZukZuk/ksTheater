import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MoviesService} from '../services/movies/movies.service';
import {Subscription} from 'rxjs';
import {Movie} from '../models/movie';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  moviesSubscriber: Subscription;
  dataSource: MatTableDataSource<Movie>;
  columnsToDisplay = ['title', 'rating', 'runtime', 'synopsis', 'image'];
  isLoading: boolean;
  isError: boolean;

  @ViewChild(MatSort, {static: false} ) sort: MatSort;

  constructor(private moviesService: MoviesService) { }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.isLoading = true;
    this.isError = false;
    this.moviesSubscriber = this.moviesService.getMoviesObservable()
      .subscribe( (movies: Movie[]) => {
        this.dataSource.data = movies;
        this.isLoading = false;
      }, error => {
        this.isError = true;
        console.error('failed to load data:', error);
      });
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnDestroy(): void {
    this.moviesSubscriber.unsubscribe();
  }

}
