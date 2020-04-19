import { ShapeFactory } from './shape-factory';
import { IShape } from './shape';
import { Circle } from './circle';

export class CircleFactory implements ShapeFactory {
  buildShape(): IShape {
    return new Circle();
  }
}
