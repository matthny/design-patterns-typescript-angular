import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CultureFacadeParams, CultureFacadeService } from 'src/app/cultures-facade/api/culture-facade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creature-simple-factory-form',
  templateUrl: './creature-simple-factory-form.component.html',
  styleUrls: ['./creature-simple-factory-form.component.scss']
})
export class CreatureSimpleFactoryFormComponent implements OnInit {

  @Output() selected = new EventEmitter<CultureFacadeParams>();

  private creatureForm: FormGroup;

  constructor(private cultureFacade: CultureFacadeService) { }

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
