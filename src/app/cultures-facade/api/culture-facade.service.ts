import { Injectable } from '@angular/core';

import { booksResource } from './book';

import { MovieService } from './movie.service';
import { TvShowService } from './tv-show.service';
import { Music } from './music';


export enum CultureType {
  music = 'music',
  movie = 'movie',
  tvShow = 'tvShow',
  book = 'book'
}

@Injectable({
  providedIn: 'root'
})
export class CultureFacadeService {

  constructor(
    private movieService: MovieService,
    private tvShowService: TvShowService
  ) {}

  get(type: CultureType, id: number) {
    switch (type) {
      case CultureType.music: {
        return this.tryToReturn(this.findMusic, id);
      }

      case CultureType.movie: {
        return this.tryToReturn(this.findMovie, id);
      }

      case CultureType.tvShow: {
        return this.tryToReturn(this.findTvShow, id);
      }

      case CultureType.book: {
        return this.tryToReturn(this.findBook, id);
      }

      default: {
        throw new Error('No type set!');
      }
    }
  }

  private findMusic(id: number) {
    const music = new Music();
    return music.fetch(id);
  }

  private findMovie(id: number) {
    return this.movieService.getMovie(id);
  }

  private findTvShow(id: number) {
    return this.tvShowService.getTvShow(id);
  }

  private findBook(id: number) {
    return booksResource.find(item => item.id === id);
  }

  private tryToReturn(func, id) {
    const result = func.call(this, id);

    return new Promise((ok, error) => result != null
      ? ok(result)
      : error('No item with this id found')
    );
  }
}
