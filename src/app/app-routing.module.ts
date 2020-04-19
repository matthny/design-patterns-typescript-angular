import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoratingPizzaComponent } from './decorating-pizza/decorating-pizza.component';
import { ObserversLotteryComponent } from './observers-lottery/observers-lottery.component';
import { CultureComponent } from './cultures-facade/culture.component';
import { CreatureSimpleFactoryComponent } from './creature-simple-factory/creature-simple-factory.component';
import { ShapeFactoryMethodComponent } from './shape-factory-method/shape-factory-method.component';

const routes: Routes = [
  { path: 'decorating-pizza', component: DecoratingPizzaComponent },
  { path: 'observers-lottery', component: ObserversLotteryComponent },
  { path: 'cultures-facade', component: CultureComponent },
  { path: 'creatures-simple-factory', component: CreatureSimpleFactoryComponent },
  { path: 'shapes-factory-method', component: ShapeFactoryMethodComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
