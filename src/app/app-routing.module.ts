import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoratingPizzaComponent } from './decorating-pizza/decorating-pizza.component';
import { ObserversLotteryComponent } from './observers-lottery/observers-lottery.component';

const routes: Routes = [
  { path: 'decorating-pizza', component: DecoratingPizzaComponent },
  { path: 'observers-lottery', component: ObserversLotteryComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
