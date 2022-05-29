import React from 'react'

import { Counter } from '../features/counter'
import { Canvas } from './Canvas'

export const App: React.FC<{}> = () => {
  return (
    <div id="App">
      <section>
        <div className="text-2xl text-center text-pink-900 m-5 font-bold">
          Скоро здесь будет игра🙂
        </div>
        <Counter />
        <Canvas />
      </section>
    </div>
  )
}
