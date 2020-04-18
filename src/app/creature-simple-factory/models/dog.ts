import { Creature} from './creature';

export class Dog extends Creature {

  makeSound(): string {
    return 'woof woof';
  }

  show(): string {
    return '🐶';
  }
}
