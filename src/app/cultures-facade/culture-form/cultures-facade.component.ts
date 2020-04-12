import { Component, OnInit } from '@angular/core';
import { CultureFacadeService, CultureType } from '../api/culture-facade.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-cultures-facade',
  templateUrl: './cultures-facade.component.html',
  styleUrls: ['./cultures-facade.component.scss']
})
export class CulturesFacadeComponent implements OnInit {

  private orderForm: FormGroup;
  public order: any;

  public books: any[];
  public movies: any[];
  public tvShows: any[];
  public music: any[];

  constructor(private cultureFacade: CultureFacadeService) { }

  ngOnInit() {
    this.setData().then(() => this.setForm());
  }

  private setForm(): void {
    this.orderForm = new FormGroup({
      culture: new FormControl(),
      id: new FormControl()
    });
  }

  public onGetClick(): void {
    this.cultureFacade.get(this.orderForm.get('culture').value, this.orderForm.get('id').value)
    .then(data => this.order = data['title'])
    .catch(e => this.order = e);
  }

  private setData() {
    const booksPromise: Promise<any[]> = this.cultureFacade.get(CultureType.book)
      .then((data: any[]) => this.books = data);

    const moviesPromise: Promise<any[]> = this.cultureFacade.get(CultureType.movie)
      .then((data: any[]) => this.movies = data);

    const tvShowsPromise: Promise<any> = this.cultureFacade.get(CultureType.tvShow)
      .then((data: any[]) => this.tvShows = data);

    const musicPromise: Promise<any> = this.cultureFacade.get(CultureType.music)
      .then((data: any[]) => this.music = data);

    return Promise.all([booksPromise, moviesPromise, tvShowsPromise, musicPromise]);
  }
}
