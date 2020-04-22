import { IShape } from './shape';

export class BlueStyleCircle implements IShape {
  public getHTML() {
    return  `
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />
      </svg>`;
  }

  public getName() {
    return 'Circle Blue Style';
  }
}
