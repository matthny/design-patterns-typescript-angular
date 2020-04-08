import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  private booksResource = [
    { id: 1, title: 'Ulysses' },
    { id: 2, title: 'Ham on Rye' },
    { id: 3, title: 'Quicksilver' }
  ];
}
