import { Component, OnInit } from '@angular/core';
import { CultureType, CultureFacadeService } from '../api/culture-facade.service';

@Component({
  selector: 'app-culture-show',
  templateUrl: './culture-show.component.html',
  styleUrls: ['./culture-show.component.scss']
})
export class CultureShowComponent implements OnInit {

  public books: any[];
  public movies: any[];
  public tvShows: any[];
  public musicRecords: any[];

  constructor(private cultureFacade: CultureFacadeService) {
    this.setData();
  }

  ngOnInit() {
  }

  private setData() {
    const booksPromise: Promise<any[]> = this.cultureFacade.get(CultureType.book)
      .then((data: any[]) => this.books = data);

    const moviesPromise: Promise<any[]> = this.cultureFacade.get(CultureType.movie)
      .then((data: any[]) => this.movies = data);

    const tvShowsPromise: Promise<any[]> = this.cultureFacade.get(CultureType.tvShow)
      .then((data: any[]) => this.tvShows = data);

    const musicPromise: Promise<any[]> = this.cultureFacade.get(CultureType.music)
      .then((data: any[]) => this.musicRecords = data);

    Promise.all([booksPromise, moviesPromise, tvShowsPromise, musicPromise]);
  }
}
