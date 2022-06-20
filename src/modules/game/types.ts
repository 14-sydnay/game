export type Position = {
  x: number
  y: number
}

export type BBox = {
  width: number
  height: number
}

export type Velocity = {
  x: number
  y: number
}

export type Physics = {
  velocity: Velocity
  gravity: number
}

export type KeyCode = string

export type ControlKey = {
  pressed: boolean
  code: KeyCode
}

export type ControlKeys = {
  up: ControlKey
  down: ControlKey
  left: ControlKey
  right: ControlKey
}

export interface ISkin {
  image: HTMLImageElement
  shiftX: number
  shiftY: number
  cropWidth: number
  cropHeight: number
  width: number
  height: number
  tick: () => void
}
