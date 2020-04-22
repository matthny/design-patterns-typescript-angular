import { ShapeStore } from './shape-store';
import { IShape } from './shape';
import { ShapeStyle } from './helper';
import { RedStyleCircle } from './red-style-circle';
import { BlueStyleCircle } from './blue-style-circle';

export class CircleStore extends ShapeStore {

  createShape(shapeStyle: ShapeStyle): IShape {
    switch (shapeStyle) {
      case ShapeStyle.redStyle: {
        return new RedStyleCircle();
      }
      case ShapeStyle.blueStyle: {
        return new BlueStyleCircle();
      }
    }
  }
}
