import { ShapeFactory } from './shape-factory';
import { IShape } from './shape';
import { Square } from './square';

export class SquareFactory implements ShapeFactory {
  buildShape(): IShape {
    return new Square();
  }
}
