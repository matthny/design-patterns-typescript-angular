import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoratingPizzaComponent } from './decorating-pizza/decorating-pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObserversLotteryComponent } from './observers-lottery/observers-lottery.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoratingPizzaComponent,
    ObserversLotteryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
