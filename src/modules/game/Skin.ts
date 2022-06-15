import KeysContoller from './KeysContoller'
import { ISkin } from './types'

export class SpriteSkin {
  protected _frames = 0

  private _image: HTMLImageElement

  protected _startShiftX: number

  protected _startShiftY: number

  protected _shiftX = 0

  protected _shiftY = 0

  protected _cropWidth: number

  protected _cropHeight: number

  private _width: number

  private _height: number

  constructor(
    image: HTMLImageElement,
    startShiftX: number,
    startShiftY: number,
    cropWidth: number,
    cropHeight: number,
    width: number,
    height: number
  ) {
    this._image = image
    this._startShiftX = startShiftX
    this._startShiftY = startShiftY
    this._cropWidth = cropWidth
    this._cropHeight = cropHeight
    this._width = width
    this._height = height
  }

  get image(): HTMLImageElement {
    return this._image
  }

  get shiftX(): number {
    return this._shiftX
  }

  get shiftY(): number {
    return this._shiftY
  }

  get cropWidth(): number {
    return this._cropWidth
  }

  get cropHeight(): number {
    return this._cropHeight
  }

  get width(): number {
    return this._width
  }

  get height(): number {
    return this._height
  }

  tick(): void {
    this._frames++
  }
}

export class PlayerIdleSpriteSkin extends SpriteSkin {
  override tick(): void {
    this._frames++
    if (this._frames > 10) this._frames = 0
    this._shiftX = this._startShiftX + this._cropWidth * this._frames
    this._shiftY = this._startShiftY
  }
}

export class PlayerRunSpriteSkin extends SpriteSkin {
  override tick(): void {
    this._frames++
    if (this._frames > 10) this._frames = 0
    this._shiftX = this._startShiftX + this._cropWidth * this._frames
    this._shiftY = this._startShiftY
  }
}

export default class PlayerSkin {
  private _idleSkin: ISkin

  private _runSkin: ISkin

  private _currentSkin: ISkin

  constructor(idle: ISkin, run: ISkin) {
    this._idleSkin = idle
    this._runSkin = run
    this._currentSkin = this._idleSkin
  }

  get image(): HTMLImageElement {
    return this._currentSkin.image
  }

  get shiftX(): number {
    return this._currentSkin.shiftX
  }

  get shiftY(): number {
    return this._currentSkin.shiftY
  }

  get cropWidth(): number {
    return this._currentSkin.cropWidth
  }

  get cropHeight(): number {
    return this._currentSkin.cropHeight
  }

  get width(): number {
    return this._currentSkin.width
  }

  get height(): number {
    return this._currentSkin.height
  }

  tick(): void {
    this._currentSkin.tick()
  }

  registerListeners(keysController: KeysContoller): void {
    keysController.on(KeysContoller.EVENTS.MOVE_RIGHT, () => {
      this._currentSkin = this._runSkin
    })

    keysController.on(KeysContoller.EVENTS.MOVE_UP, () => {
      this._currentSkin = this._idleSkin
    })
  }
}
