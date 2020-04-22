import { ShapeStore } from './shape-store';
import { IShape } from './shape';
import { ShapeType, ShapeStyle } from './helper';
import { RedStyleSquare } from './red-style-square';
import { BlueStyleSquare } from './blue-style-square';

export class SquareStore extends ShapeStore {

  createShape(shapeStyle: ShapeStyle): IShape {
    switch (shapeStyle) {
      case ShapeStyle.redStyle: {
        return new RedStyleSquare();
      }
      case ShapeStyle.blueStyle: {
        return new BlueStyleSquare();
      }
    }
  }
}
