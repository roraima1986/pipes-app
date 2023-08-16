export enum Color{
  red, black, blue, green
}

//export type Color = 'red' | 'black' | 'blue' | 'green';

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color
}
