import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PizzaService } from './pizza.service';
import { Pizza } from './pizza';


@Component({
  selector: 'app-decorating-pizza',
  templateUrl: './decorating-pizza.component.html',
  styleUrls: ['./decorating-pizza.component.scss']
})
export class DecoratingPizzaComponent implements OnInit {

  private pizza: Pizza;
  private pizzaName: string;
  private pizzaForm: FormGroup;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.setForm();
  }

  private setForm(): void {
    this.pizzaForm = new FormGroup({
      mushroom: new FormControl(false),
      pepperoni: new FormControl(false)
    });
  }

  public onBakeClick(): void  {
    this.pizza = this.pizzaService.orderPizza(this.pizzaForm.value.mushroom, this.pizzaForm.value.pepperoni);
    this.pizzaName = this.pizza.bakePizza();
  }
}
