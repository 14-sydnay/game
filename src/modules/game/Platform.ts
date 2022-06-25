import GameElement from './GameElement'
import { Position } from './types'

export default class Platform extends GameElement {
  constructor(initPosition: Position, image: HTMLImageElement) {
    super(initPosition, image)
  }
}
