import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store'
import { decrement, increment } from './counterSlice'

export const Counter: React.FC<{}> = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Увеличить
        </button>
        <span>{count}</span>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Уменьшить
        </button>
      </div>
    </div>
  )
}
