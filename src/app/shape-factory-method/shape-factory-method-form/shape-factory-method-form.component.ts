import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShapeType, ShapeStyle, ShapeParams } from '../models/helper';

@Component({
  selector: 'app-shape-factory-method-form',
  templateUrl: './shape-factory-method-form.component.html',
  styleUrls: ['./shape-factory-method-form.component.scss']
})
export class ShapeFactoryMethodFormComponent implements OnInit {

  @Output() selected = new EventEmitter<ShapeParams>();

  private shapeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.setForm();
  }

  private setForm(): void {
    this.shapeForm = new FormGroup({
      shapeType: new FormControl(ShapeType.circle),
      shapeStyle: new FormControl(ShapeStyle.blueStyle)
    });
  }

  public onButtonClick(): void {
    if (this.shapeForm.valid) {
      this.selected.emit({
        shapeType: this.shapeForm.get('shapeType').value,
        shapeStyle: this.shapeForm.get('shapeStyle').value
      });
    }
  }
}
