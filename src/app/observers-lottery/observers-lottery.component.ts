import { Component, OnInit } from '@angular/core';
import { LotteryObserver } from './observer';
import { NumbersLottery } from './lottery';
import { Observer1to5, Observer6to10 as Observer6to10 } from './observer';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-observers-lottery',
  templateUrl: './observers-lottery.component.html',
  styleUrls: ['./observers-lottery.component.scss']
})
export class ObserversLotteryComponent implements OnInit {

  private observer1to5: LotteryObserver;
  private observer6to10: LotteryObserver;
  private numbersLottery: NumbersLottery;
  private observersForm: FormGroup;

  constructor() {
    this.observer1to5 = new Observer1to5();
    this.observer6to10 = new Observer6to10();
    this.numbersLottery = new NumbersLottery();
   }

  ngOnInit() {
    this.setForm();
  }

  private setForm(): void {
    this.observersForm = new FormGroup({
      observer1to5: new FormControl(false),
      observer6to10: new FormControl(false)
    });
  }

  public handleClick(): void {
    if (this.observersForm.value.observer1to5 === true) {
      if (!this.numbersLottery.observers.includes(this.observer1to5)) {
        this.numbersLottery.attach(this.observer1to5);
      }
    }

    if (this.observersForm.value.observer1to5 === false) {
      if (this.numbersLottery.observers.includes(this.observer1to5)) {
        this.numbersLottery.detach(this.observer1to5);
      }
    }

    if (this.observersForm.value.observer6to10 === true) {
      if (!this.numbersLottery.observers.includes(this.observer6to10)) {
        this.numbersLottery.attach(this.observer6to10);
      }
    }

    if (this.observersForm.value.observer6to10 === false) {
      if (this.numbersLottery.observers.includes(this.observer6to10)) {
        this.numbersLottery.detach(this.observer6to10);
      }
    }
  }

  public onLotteryClick(): void {
    this.numbersLottery.startLottery();
  }
}
