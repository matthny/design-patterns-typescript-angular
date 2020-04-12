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

  get(type: CultureType, id?: number) {
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

  private findMusic(id?: number) {
    if (id != null) {
      const music = new Music();
      return music.fetch(id);
    }

    if (id == null) {
      const music = new Music();
      return music.resources;
    }
  }

  private findMovie(id?: number) {
    if (id != null) {
      return this.movieService.getMovie(id);
    }

    if (id == null) {
      return this.movieService.getAllMovies();
    }
  }

  private findTvShow(id?: number) {
    if (id != null) {
      return this.tvShowService.getTvShow(id);
    }

    if (id == null) {
      const tvShows = [];
      let showId: number = 1;
      while (this.tvShowService.getTvShow(showId) == null) {
        tvShows.push(this.tvShowService.getTvShow(showId));
        showId++;
      }
      return tvShows;
    }
  }

  private findBook(id?: number) {
    if (id != null) {
      return booksResource.find(item => item.id === id);
    }

    if (id == null) {
      return booksResource;
    }
  }

  private tryToReturn(func, id) {
    const result = func.call(this, id);

    return new Promise((ok, error) => result != null
      ? ok(result)
      : error('No item with this id found')
    );
  }
}
