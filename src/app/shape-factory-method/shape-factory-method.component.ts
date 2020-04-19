import { Component, OnInit } from '@angular/core';
import { Circle } from './models/circle';
import { ShapeFactory } from './models/shape-factory';
import { CircleFactory } from './models/circle-factory';
import { IShape } from './models/shape';
import { ShapeType } from './models/helper';
import { SquareFactory } from './models/square-factory';

@Component({
  selector: 'app-shape-factory-method',
  templateUrl: './shape-factory-method.component.html',
  styleUrls: ['./shape-factory-method.component.scss']
})
export class ShapeFactoryMethodComponent implements OnInit {


  private shape: IShape;
  public shapeName: string;

  constructor() {

  }

  ngOnInit() {
  }

  private handleForm(shapeType: ShapeType) {
    let factory: ShapeFactory;
    if (shapeType === ShapeType.circle) {
      factory = new CircleFactory();
    }

    if (shapeType === ShapeType.square) {
      factory = new SquareFactory();
    }

    this.shape = factory.buildShape();
    this.shapeName = this.shape.getName();
    document.getElementById('shape').innerHTML = this.shape.getHTML();
  }
}
