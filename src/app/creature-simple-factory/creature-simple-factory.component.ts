import { Component, OnInit } from '@angular/core';
import { CreatureSimpleFactory } from './models/creature-simple-factory';
import { CreatureType } from './models/helper';
import { Creature } from './models/creature';

@Component({
  selector: 'app-creature-simple-factory',
  templateUrl: './creature-simple-factory.component.html',
  styleUrls: ['./creature-simple-factory.component.scss']
})
export class CreatureSimpleFactoryComponent implements OnInit {

  private factory: CreatureSimpleFactory;
  private creature: Creature;
  public creaturePicture: string;
  public creatureSound: string;

  constructor(factory: CreatureSimpleFactory) {
    this.factory = factory;
  }

  ngOnInit() {
  }

  private handleForm(e: CreatureType) {
    this.creature = this.factory.createCreature(e);
    this.creaturePicture = this.creature.show();
    this.creatureSound = this.creature.makeSound();
  }
}
