import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CultureFacadeService } from 'src/app/cultures-facade/api/culture-facade.service';
import { ShapeType } from '../models/helper';

@Component({
  selector: 'app-shape-factory-method-form',
  templateUrl: './shape-factory-method-form.component.html',
  styleUrls: ['./shape-factory-method-form.component.scss']
})
export class ShapeFactoryMethodFormComponent implements OnInit {

  @Output() selected = new EventEmitter<ShapeType>();

  private shapeForm: FormGroup;

  constructor(private cultureFacade: CultureFacadeService) { }

  ngOnInit() {
    this.setForm();
  }

  private setForm(): void {
    this.shapeForm = new FormGroup({
      shapeType: new FormControl('circle')
    });
  }

  public onButtonClick(): void {
    if (this.shapeForm.valid) {
      this.selected.emit(this.shapeForm.get('shapeType').value);
    }
  }
}
