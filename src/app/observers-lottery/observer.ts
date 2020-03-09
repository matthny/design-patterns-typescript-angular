import { NumbersLottery, Lottery } from './lottery';

export interface LotteryObserver {
  update(lottery: Lottery): void;
}

export class Observer1to5 implements LotteryObserver {

  public result: string;

  public update(lottery: NumbersLottery): void {
    if (lottery.state <= 5) {
      this.result = 'I win !';
    } else {
      this.result = 'I lost !';
    }
  }
}

export class Observer6to10 implements LotteryObserver {

  public result: string;

  public update(lottery: NumbersLottery): void {
    if (lottery.state > 5) {
      this.result = 'I win !';
    } else {
      this.result = 'I lost !';
    }
  }
}

