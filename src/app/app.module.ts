import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoratingPizzaComponent } from './decorating-pizza/decorating-pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObserversLotteryComponent } from './observers-lottery/observers-lottery.component';
import { CultureComponent } from './cultures-facade/culture.component';
import { CultureFormComponent } from './cultures-facade/culture-form/culture-form.component';
import { CultureShowComponent } from './cultures-facade/culture-show/culture-show.component';
import { CreatureSimpleFactoryComponent } from './creature-simple-factory/creature-simple-factory.component';
import { CreatureSimpleFactoryFormComponent } from './creature-simple-factory/creature-simple-factory-form/creature-simple-factory-form.component';
import { ShapeFactoryMethodComponent } from './shape-factory-method/shape-factory-method.component';
import { ShapeFactoryMethodFormComponent } from './shape-factory-method/shape-factory-method-form/shape-factory-method-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoratingPizzaComponent,
    ObserversLotteryComponent,
    CultureComponent,
    CultureFormComponent,
    CultureShowComponent,
    CreatureSimpleFactoryComponent,
    CreatureSimpleFactoryFormComponent,
    ShapeFactoryMethodComponent,
    ShapeFactoryMethodFormComponent
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
