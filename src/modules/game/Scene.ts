export default class Scene {
  width: number

  height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, this.width, this.height)
  }
}
