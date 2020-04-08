import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoratingPizzaComponent } from './decorating-pizza/decorating-pizza.component';
import { ObserversLotteryComponent } from './observers-lottery/observers-lottery.component';
import { CulturesFacadeComponent } from './cultures-facade/cultures-facade.component';

const routes: Routes = [
  { path: 'decorating-pizza', component: DecoratingPizzaComponent },
  { path: 'observers-lottery', component: ObserversLotteryComponent },
  { path: 'cultures-facade', component: CulturesFacadeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
