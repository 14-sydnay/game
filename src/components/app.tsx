import React from 'react'

import { Counter } from '../features/counter'
import { Canvas } from './Canvas'

export const App: React.FC<{}> = () => {
  return (
    <div id="App">
      <section>
        <h1 className="text-primary text-3xl">Скоро здесь будет игра🙂</h1>
        <button className="btn btn-active btn-accent">Начать</button>
        <Counter />
        <Canvas />
      </section>
    </div>
  )
}
