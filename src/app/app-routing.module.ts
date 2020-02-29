import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoratingPizzaComponent } from './decorating-pizza/decorating-pizza.component';

const routes: Routes = [
  { path: 'decorating-pizza', component: DecoratingPizzaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
