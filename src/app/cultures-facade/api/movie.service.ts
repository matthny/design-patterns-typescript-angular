import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {}

  get resources() {
    return [
      { id: 1, title: 'Avengers' },
      { id: 2, title: 'Antman and the Wasp' },
      { id: 3, title: 'Spider-Man: Far From Home' }
    ];
  }

  public getMovie(id) {
    return this.resources.find(element => element.id === id);
  }
}
