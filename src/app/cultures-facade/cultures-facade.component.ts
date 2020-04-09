import { Component, OnInit } from '@angular/core';
import { CultureFacadeService, CultureType } from './api/culture-facade.service';

@Component({
  selector: 'app-cultures-facade',
  templateUrl: './cultures-facade.component.html',
  styleUrls: ['./cultures-facade.component.scss']
})
export class CulturesFacadeComponent implements OnInit {

  constructor(private cultureFacade: CultureFacadeService) { }

  ngOnInit() {
    this.go();
  }

  private go() {
    this.cultureFacade.get(CultureType.tvShow, 5)
      .then(data => console.log(data))
      .catch(e => console.log(e));
  }
}
