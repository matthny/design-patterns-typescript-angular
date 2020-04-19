import { IShape } from './shape';

export abstract class ShapeFactory {
  abstract buildShape(): IShape;
}
