import { Creature} from './creature';

export class Cat extends Creature {

  makeSound(): string {
    return 'meow';
  }

  show(): string {
    return '🐱';
  }
}
