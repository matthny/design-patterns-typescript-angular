import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CultureFacadeService, CultureType, CultureFacadeParams } from '../api/culture-facade.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-culture-form',
  templateUrl: './culture-form.component.html',
  styleUrls: ['./culture-form.component.scss']
})
export class CultureFormComponent implements OnInit {

  @Output() selected = new EventEmitter<CultureFacadeParams>();

  private orderForm: FormGroup;
  public order: any;

  constructor(private cultureFacade: CultureFacadeService) { }

  ngOnInit() {
    this.setForm();
  }

  private setForm(): void {
    this.orderForm = new FormGroup({
      culture: new FormControl('book'),
      id: new FormControl('', Validators.required)
    });
  }

  public onGetClick(): void {
    if (this.orderForm.valid) {
      this.selected.emit({id: this.orderForm.get('id').value, cultureType: this.orderForm.get('culture').value });
    }
  }
}
