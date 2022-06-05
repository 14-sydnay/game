import GameElement from './GameElement';
import MotionStrategy from './MotionStrategy';
import SimpleMotionStrategy from './SimpleMotionStrategy';

export default class MovableGameElement extends GameElement {
  private _motionStrategy: MotionStrategy | SimpleMotionStrategy;

  constructor(
    initPosition: Position,
    image: HTMLImageElement,
    motionStrategy: MotionStrategy | SimpleMotionStrategy,
    initVelocity: Velocity = { x: 0, y: 0 }
  ) {
    super(initPosition, image, initVelocity);
    this._motionStrategy = motionStrategy;
  }

  moveUp() {
    this._motionStrategy.moveUp(this);
  }

  moveDown() {
    this._motionStrategy.moveDown(this);
  }

  moveForward() {
    this._motionStrategy.moveForward(this);
  }

  moveBack() {
    this._motionStrategy.moveBack(this);
  }
}
