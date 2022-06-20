import { BBox, Position, Velocity } from './types'

export default class GameElement {
  position: Position

  velocity: Velocity

  protected image: HTMLImageElement

  protected bbox: BBox

  constructor(
    initPosition: Position,
    image: HTMLImageElement,
    initVelocity: Velocity = { x: 0, y: 0 }
  ) {
    this.position = {
      x: initPosition.x,
      y: initPosition.y,
    }
    this.image = image
    this.bbox = { width: image.width, height: image.height }

    this.velocity = {
      x: initVelocity.x,
      y: initVelocity.y,
    }
  }

  get height(): number {
    return this.bbox.height
  }

  get width(): number {
    return this.bbox.width
  }

  get top(): number {
    return this.position.y
  }

  get bottom(): number {
    return this.position.y + this.height
  }

  get left(): number {
    return this.position.x
  }

  get right(): number {
    return this.position.x + this.width
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.left, this.top)
  }
}
