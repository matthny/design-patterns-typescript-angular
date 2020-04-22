import { Creature} from './creature';
import { CreatureType } from './helper';
import { Dog } from './dog';
import { Cat } from './cat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatureSimpleFactory {

  public createCreature(type: CreatureType): Creature {
    switch (type) {
      case CreatureType.dog: {
        return new Dog();
      }
      case CreatureType.cat: {
        return new Cat();
      }
    }
  }
}
