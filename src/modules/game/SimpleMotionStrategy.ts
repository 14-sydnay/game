import GameElement from './GameElement';

export default class SimpleMotionStrategy {
  private _horizontalVelocity: number;
  private _verticalVelocity: number;

  constructor(horizontalVelocity: number = 5, verticalVelocity: number = 10) {
    this._horizontalVelocity = horizontalVelocity;
    this._verticalVelocity = verticalVelocity;
  }

  moveUp(obj: GameElement) {
    obj.position.y -= this._verticalVelocity;
  }

  moveDown(obj: GameElement) {
    obj.position.y += this._verticalVelocity;
  }

  moveForward(obj: GameElement) {
    obj.position.x += this._horizontalVelocity;
  }

  moveBack(obj: GameElement) {
    obj.position.x -= this._horizontalVelocity;
  }
}
