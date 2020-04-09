import { Component, OnInit } from '@angular/core';
import { CultureFacadeService, CultureType } from './api/culture-facade.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-cultures-facade',
  templateUrl: './cultures-facade.component.html',
  styleUrls: ['./cultures-facade.component.scss']
})
export class CulturesFacadeComponent implements OnInit {

  private orderForm: FormGroup;
  private order: any;

  constructor(private cultureFacade: CultureFacadeService) { }

  ngOnInit() {
    this.setForm();
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
 }
