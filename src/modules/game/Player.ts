import GameElement from './GameElement'
import MotionStrategy from './MotionStrategy'
import { ISkin, Position } from './types'

export default class Player extends GameElement {
  private _motionStrategy: MotionStrategy

  private _skin: ISkin

  constructor(initPosition: Position, skin: ISkin, motionStrategy: MotionStrategy) {
    super(initPosition, skin.image)
    this.bbox = { width: 170, height: 147 }
    this._motionStrategy = motionStrategy
    this._skin = skin
  }

  moveUp(): void {
    this._motionStrategy.moveUp(this)
  }

  moveDown(): void {
    this._motionStrategy.moveDown(this)
  }

  moveForward(): void {
    this._motionStrategy.moveForward(this)
  }

  moveBack(): void {
    this._motionStrategy.moveBack(this)
  }

  stop(): void {
    this._motionStrategy.stop(this)
  }

  override draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this._skin.image,
      this._skin.shiftX,
      this._skin.shiftY,
      this._skin.cropWidth,
      this._skin.cropHeight,
      this.left,
      this.top,
      this._skin.width,
      this._skin.height
    )
  }

  update(ctx: CanvasRenderingContext2D): void {
    this._skin.tick()
    this.draw(ctx)
    this._motionStrategy.tick(this)
  }
}
