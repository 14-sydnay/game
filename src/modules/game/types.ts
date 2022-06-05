type Position = {
  x: number
  y: number
}

type BBox = {
  width: number
  height: number
}

type Velocity = {
  x: number
  y: number
}

type Physics = {
  velocity: Velocity
  gravity: number
}

type KeyCode = string

type ControlKey = {
  pressed: boolean
  code: KeyCode
}

type ControlKeys = {
  up: ControlKey
  down: ControlKey
  left: ControlKey
  right: ControlKey
}
