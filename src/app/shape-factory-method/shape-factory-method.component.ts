import { Component, OnInit } from '@angular/core';
import { ShapeStore } from './models/shape-store';
import { CircleStore } from './models/circle-store';
import { IShape } from './models/shape';
import { ShapeType, ShapeStyle, ShapeParams } from './models/helper';
import { SquareStore } from './models/square-store';

@Component({
  selector: 'app-shape-factory-method',
  templateUrl: './shape-factory-method.component.html',
  styleUrls: ['./shape-factory-method.component.scss']
})
export class ShapeFactoryMethodComponent implements OnInit {


  private shape: IShape;
  public shapeName: string;
  private circleStore: CircleStore;
  private squareStore: SquareStore;

  constructor() {
    this.circleStore = new CircleStore();
    this.squareStore = new SquareStore();
  }

  ngOnInit() {
  }

  private handleForm(shapeStyle: ShapeParams) {
    if (shapeStyle.shapeType === ShapeType.circle) {
      this.shape = this.circleStore.orderShape(shapeStyle.shapeStyle);
    }

    if (shapeStyle.shapeType === ShapeType.square) {
      this.shape = this.squareStore.orderShape(shapeStyle.shapeStyle);
    }

    this.shapeName = this.shape.getName();
    document.getElementById('shape').innerHTML = this.shape.getHTML();
  }
}
