import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  get resources() {
    return [
      { id: 1, title: 'Somewhere in Time' },
      { id: 2, title: 'Fire & Grace' },
      { id: 3, title: 'The Gathering' }
    ];
  }

  fetch(id) {
    return this.resources.find(item => item.id === id);
  }
}
