import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreatureType } from '../models/helper';

@Component({
  selector: 'app-creature-simple-factory-form',
  templateUrl: './creature-simple-factory-form.component.html',
  styleUrls: ['./creature-simple-factory-form.component.scss']
})
export class CreatureSimpleFactoryFormComponent implements OnInit {

  @Output() selected = new EventEmitter<CreatureType>();

  private creatureForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.setForm();
  }

  private setForm(): void {
    this.creatureForm = new FormGroup({
      creatureType: new FormControl('dog')
    });
  }

  public onButtonClick(): void {
    if (this.creatureForm.valid) {
      this.selected.emit(this.creatureForm.get('creatureType').value);
    }
  }
}
