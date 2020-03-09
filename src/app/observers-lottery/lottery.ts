import { LotteryObserver } from './observer';

export interface Lottery {
  attach(observer: LotteryObserver): void;
  detach(observer: LotteryObserver): void;
  notify(): void;
}

export class NumbersLottery implements Lottery {
  public state: number;

  public observers: LotteryObserver[] = [];

  public attach(observer: LotteryObserver): void {
    this.observers.push(observer);
  }

  public detach(observer: LotteryObserver): void {
    const observerIndex: number = this.observers.indexOf(observer);
    this.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    this.observers.forEach((observer: LotteryObserver) => {
      observer.update(this);
    });
  }

  public startLottery(): void {
    this.state = Math.floor(Math.random() * 10) + 1;
    this.notify();
  }
}
