import { IShape } from './shape';
import { ShapeType, ShapeStyle } from './helper';

export abstract class ShapeStore {
  public orderShape(shapeStyle: ShapeStyle): IShape {

    const shape: IShape = this.createShape(shapeStyle);

    return shape;
  }

  abstract createShape(shapeColor: ShapeStyle): IShape;
}
