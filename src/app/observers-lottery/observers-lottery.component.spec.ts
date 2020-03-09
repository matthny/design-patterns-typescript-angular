import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserversLotteryComponent } from './observers-lottery.component';

describe('ObserversLotteryComponent', () => {
  let component: ObserversLotteryComponent;
  let fixture: ComponentFixture<ObserversLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserversLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserversLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
