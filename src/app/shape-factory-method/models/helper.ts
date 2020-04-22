export enum ShapeType {
  circle = 'circle',
  square = 'square'
}

export enum ShapeStyle {
  redStyle = 'redStyle',
  blueStyle = 'blueStyle'
}

export interface ShapeParams {
  shapeType: ShapeType;
  shapeStyle: ShapeStyle;
}
