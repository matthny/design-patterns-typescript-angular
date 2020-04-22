import { IShape } from './shape';

export class BlueStyleSquare implements IShape {
  public getHTML() {
    return  `
      <svg width="100" height="100">
        <rect width="90" height="90" style="fill:blue;stroke-width:3;stroke:rgb(0,0,0)" />
      </svg>`;
  }

  public getName() {
    return 'Square Blue Style';
  }
}
