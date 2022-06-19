import GameElement from './GameElement'
import MotionStrategy from './MotionStrategy'

export default class Player extends GameElement {
  private _motionStrategy: MotionStrategy

  constructor(
    initPosition: Position,
    image: HTMLImageElement,
    motionStrategy: MotionStrategy
  ) {
    super(initPosition, image)
    this._motionStrategy = motionStrategy
  }

  moveUp() {
    this._motionStrategy.moveUp(this)
  }

  moveDown() {
    this._motionStrategy.moveDown(this)
  }

  moveForward() {
    this._motionStrategy.moveForward(this)
  }

  moveBack() {
    this._motionStrategy.moveBack(this)
  }

  stop() {
    this._motionStrategy.stop(this)
  }

  update(ctx: CanvasRenderingContext2D) {
    this.draw(ctx)
    this._motionStrategy.tick(this)
  }
}
