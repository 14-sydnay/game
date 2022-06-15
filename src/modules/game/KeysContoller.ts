import { ControlKeys, KeyCode } from './types'
import { EventBus } from 'Modules/eventBus'
import { Listener } from 'Modules/eventBus/types'

type Events = Values<typeof KeysContoller.EVENTS>

export default class KeysContoller {
  static EVENTS = {
    MOVE_LEFT: 'move:forward',
    MOVE_RIGHT: 'move:back',
    MOVE_UP: 'move:up',
    MOVE_DOWN: 'move:down',
  } as const

  private _eventBus: EventBus<Events>

  private _keys: ControlKeys

  constructor(keyUp: KeyCode, keyDown: KeyCode, keyleft: KeyCode, keyRight: KeyCode) {
    this._keys = {
      up: { code: keyUp, pressed: false },
      down: { code: keyDown, pressed: false },
      left: { code: keyleft, pressed: false },
      right: { code: keyRight, pressed: false },
    }
    addEventListener('keydown', this._handleKeyDown)
    addEventListener('keyup', this._handleKeyUp)
    this._eventBus = new EventBus<Events>()
  }

  on(event: Events, callback: Listener<unknown[]>): void {
    this._eventBus.on(event, callback)
  }

  reset(): void {
    this._eventBus.destroy()
  }

  destroy(): void {
    removeEventListener('keydown', this._handleKeyDown)
    removeEventListener('keyup', this._handleKeyUp)
    this._eventBus.destroy()
  }

  private _handleKeyUp = (e: KeyboardEvent) => {
    switch (e.code) {
      case this._keys.down.code:
        this._keys.down.pressed = false
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_DOWN, false)
        break
      case this._keys.up.code:
        this._keys.up.pressed = false
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_UP, false)
        break
      case this._keys.left.code:
        this._keys.left.pressed = false
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_LEFT, false)
        break
      case this._keys.right.code:
        this._keys.right.pressed = false
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_RIGHT, false)
        break
    }
  }

  private _handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case this._keys.down.code:
        this._keys.down.pressed = true
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_DOWN, true)
        break
      case this._keys.up.code:
        this._keys.up.pressed = true
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_UP, true)
        break
      case this._keys.left.code:
        this._keys.left.pressed = true
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_LEFT, true)
        break
      case this._keys.right.code:
        this._keys.right.pressed = true
        this._eventBus.emit(KeysContoller.EVENTS.MOVE_RIGHT, true)
        break
    }
  }
}
