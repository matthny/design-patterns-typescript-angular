export interface Pizza {
  bakePizza(): string;
}

export class BasePizza implements Pizza {

  constructor() {
  }

  public bakePizza() {
    return 'Margherita';
  }
}

export class PizzaDecorator implements Pizza {

  private pizza: Pizza;

  constructor(pizza: Pizza) {
    this.pizza = pizza;
  }

  public bakePizza() {
    return this.pizza.bakePizza();
  }
}

export class Mushroom extends PizzaDecorator {

  constructor(pizza: Pizza) {
    super(pizza);
  }

  bakePizza() {
    return super.bakePizza() + ' + mushroom';
  }
}

export class Pepperoni extends PizzaDecorator {

  constructor(pizza: Pizza) {
    super(pizza);
  }

  bakePizza() {
    return super.bakePizza() + ' + pepperoni';
  }
}
