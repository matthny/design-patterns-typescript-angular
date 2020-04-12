import { Component, OnInit } from '@angular/core';
import { CultureFacadeService, CultureType, CultureFacadeParams } from './api/culture-facade.service';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {

  public order: string;

  constructor(private cultureFacade: CultureFacadeService) { }

  ngOnInit() {
  }

  private onGetOrder(params: CultureFacadeParams) {
    this.cultureFacade.get(params.cultureType, params.id)
      .then(data => this.order = data['title'])
      .catch(e => this.order = e);
  }
}
