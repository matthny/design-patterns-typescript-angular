import { IShape } from './shape';

export class RedStyleSquare implements IShape {
  public getHTML() {
    return  `
      <svg width="100" height="100">
        <rect width="90" height="90" style="fill:red;stroke-width:3;stroke:rgb(0,0,0)" />
      </svg>`;
  }

  public getName() {
    return 'Square Red Style';
  }
}
