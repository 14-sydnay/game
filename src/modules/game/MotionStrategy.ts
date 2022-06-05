import GameElement from './GameElement'

export default class MotionStrategy {
  private _scene: BBox

  private _gravity: number

  private _horizontalVelocity: number

  private _verticalVelocity: number

  constructor(scene: BBox, gravity: number, horizontalVelocity = 5, verticalVelocity = 10) {
    this._scene = { width: scene.width, height: scene.height }
    this._gravity = gravity
    this._horizontalVelocity = horizontalVelocity
    this._verticalVelocity = verticalVelocity
  }

  tick(obj: GameElement) {
    obj.position.y += obj.velocity.y
    obj.position.x += obj.velocity.x
    if (this.isInScene(obj)) obj.velocity.y += this._gravity
    // else obj.velocity.y = 0;
  }

  moveUp(obj: GameElement) {
    obj.velocity.y = -this._verticalVelocity
  }

  moveDown(obj: GameElement) {
    obj.velocity.y = this._verticalVelocity
  }

  moveForward(obj: GameElement) {
    obj.velocity.x = this._horizontalVelocity
  }

  moveBack(obj: GameElement) {
    obj.velocity.x = -this._horizontalVelocity
  }

  stop(obj: GameElement) {
    obj.velocity.x = 0
  }

  private isInScene(obj: GameElement) {
    return obj.bottom + obj.velocity.y < this._scene.height
  }
}
