import { IShape } from './shape';

export class RedStyleCircle implements IShape {
  public getHTML() {
    return  `
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>`;
  }

  public getName() {
    return 'Circle Red Style';
  }
}
