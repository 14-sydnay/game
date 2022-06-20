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

  protected _width: number

  protected _height: number

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
    switch (this._frames) {
      case 0: {
        this._shiftX = 61
        this._shiftY = 40
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 106
        break
      }
      case 1: {
        this._shiftX = 146
        this._shiftY = 40
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 106
        break
      }
      case 2: {
        this._shiftX = 231
        this._shiftY = 40
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 106
        break
      }
      case 3: {
        this._shiftX = 316
        this._shiftY = 40
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 106
        break
      }
      case 4: {
        this._shiftX = 400
        this._shiftY = 37
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 106
        break
      }
      case 5: {
        this._shiftX = 486
        this._shiftY = 37
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 106
        break
      }
      case 6: {
        this._shiftX = 570
        this._shiftY = 37
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 106
        break
      }
      case 7: {
        this._shiftX = 658
        this._shiftY = 37
        this._cropWidth = 81
        this._cropHeight = 80
        this._width = 119
        break
      }
      case 8: {
        this._shiftX = 758
        this._shiftY = 37
        this._cropWidth = 88
        this._cropHeight = 80
        this._width = 129
        break
      }
      case 9: {
        this._shiftX = 866
        this._shiftY = 37
        this._cropWidth = 97
        this._cropHeight = 80
        this._width = 143
        break
      }
      case 10: {
        this._shiftX = 125
        this._shiftY = 136
        this._cropWidth = 100
        this._cropHeight = 80
        this._width = 147
        break
      }
      case 11: {
        this._shiftX = 243
        this._shiftY = 136
        this._cropWidth = 96
        this._cropHeight = 80
        this._width = 141
        break
      }
      case 12: {
        this._shiftX = 358
        this._shiftY = 136
        this._cropWidth = 88
        this._cropHeight = 80
        this._width = 129
        break
      }
      case 13: {
        this._shiftX = 466
        this._shiftY = 136
        this._cropWidth = 80
        this._cropHeight = 80
        this._width = 118
        break
      }
      case 14: {
        this._shiftX = 564
        this._shiftY = 136
        this._cropWidth = 67
        this._cropHeight = 80
        this._width = 98
        break
      }
      case 15: {
        this._shiftX = 650
        this._shiftY = 136
        this._cropWidth = 66
        this._cropHeight = 80
        this._width = 97
        break
      }
      case 16: {
        this._shiftX = 736
        this._shiftY = 136
        this._cropWidth = 68
        this._cropHeight = 80
        this._width = 100
        break
      }
      case 17: {
        this._shiftX = 819
        this._shiftY = 136
        this._cropWidth = 66
        this._cropHeight = 80
        this._width = 97
        break
      }
    }
    this._frames++
    if (this._frames > 17) this._frames = 0
  }
}

export default class PlayerSkin implements ISkin {
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
    keysController.on(KeysContoller.EVENTS.MOVE_RIGHT, (eventArg) => {
      const isPlayerRun = eventArg as boolean
      if (isPlayerRun) this._currentSkin = this._runSkin
      else this._currentSkin = this._idleSkin
    })
    keysController.on(KeysContoller.EVENTS.MOVE_UP, () => {
      this._currentSkin = this._idleSkin
    })
  }
}
