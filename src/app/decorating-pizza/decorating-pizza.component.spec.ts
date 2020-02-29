import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratingPizzaComponent } from './decorating-pizza.component';

describe('DecoratingPizzaComponent', () => {
  let component: DecoratingPizzaComponent;
  let fixture: ComponentFixture<DecoratingPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratingPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratingPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
