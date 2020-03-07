import { Injectable } from '@angular/core';
import { Pepperoni, BasePizza, Pizza, Mushroom } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  public orderPizza(isMushroom: boolean, isPepperoni: boolean): Pizza {
    let newPizza: Pizza;

    if (!isPepperoni && !isMushroom) {
      newPizza = new BasePizza();
    }

    if (isMushroom && !isPepperoni) {
      newPizza = new Mushroom(new BasePizza());
    }

    if (isPepperoni && !isMushroom) {
      newPizza = new Pepperoni(new BasePizza());
    }

    if (isPepperoni && isMushroom) {
      newPizza = new Pepperoni(new Mushroom(new BasePizza()));
    }

    return  newPizza;
  }
}



