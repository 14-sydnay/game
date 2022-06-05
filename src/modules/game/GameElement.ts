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

  get height() {
    return this.bbox.height
  }

  get width() {
    return this.bbox.width
  }

  get top() {
    return this.position.y
  }

  get bottom() {
    return this.position.y + this.height
  }

  get left() {
    return this.position.x
  }

  get right() {
    return this.position.x + this.width
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.left, this.top)
  }
}
