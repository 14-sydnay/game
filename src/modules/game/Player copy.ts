/* import GameElement from './GameElement'
import MotionStrategy from './MotionStrategy'

export default class Player extends GameElement {
  private _motionStrategy: MotionStrategy

  private frames: number

  private currentSprite: null

  private sprits: {
    stand: { image: null; cropWidth: number }
    run: { image: null; cropWidth: number }
  }

  constructor(initPosition: Position, image: HTMLImageElement, motionStrategy: MotionStrategy) {
    super(initPosition, image)
    this.bbox = { width: 170, height: 147 }
    this._motionStrategy = motionStrategy
    this.frames = 0
    this.sprits = {
      stand: {
        image: null,
        cropWidth: 170,
      },
      run: {
        image: null,
        cropWidth: 170,
      },
    }
    this.currentSprite = this.sprits.stand.image
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

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image, //this.currentSprite
      72 + 173 * this.frames, //this.
      56,
      173,
      147,
      this.left,
      this.top,
      173,
      147
    )
    //ctx.drawImage(this.image, this.left, this.top)
  }

  update(ctx: CanvasRenderingContext2D) {
    this.updateFrames()
    this.draw(ctx)
    this._motionStrategy.tick(this)
  }
  private updateFrames() {
    this.frames++
    if (this.frames > 10) this.frames = 0
  }
}
 */
