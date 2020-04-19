import { IShape } from './shape';

export class Square implements IShape {
  public getHTML() {
    return  `
      <svg width="100" height="100">
        <rect width="90" height="90" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
      </svg>`;
  }

  public getName() {
    return 'Square';
  }
}


