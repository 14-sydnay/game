import { IStack } from './types'

export class Stack<T> implements IStack<T> {
  private _inner: T[] = []

  push(item: T): void {
    this._inner.push(item)
  }

  pop(): T | undefined {
    return this._inner.pop()
  }

  peek(): T | undefined {
    return this._inner[this._inner.length - 1]
  }
}
