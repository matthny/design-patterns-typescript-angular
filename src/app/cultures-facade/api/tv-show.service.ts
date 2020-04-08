import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor() { }

  private getTvShow(id) {
    const resources = [
      { id: 1, title: 'How I met Your Mother' },
      { id: 2, title: 'Friends' },
      { id: 3, title: 'Big Bang Theory' }
    ];

    return resources.find(item => item.id === 1);
  }
}
