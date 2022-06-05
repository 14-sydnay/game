import GameElement from './GameElement';

export default class Platform extends GameElement {
  constructor(initPosition: Position, image: HTMLImageElement) {
    super(initPosition, image);
  }
}
