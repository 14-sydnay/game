import React from 'react'

import { Canvas } from '../components/Canvas'
import { Counter } from '../features/counter'
import { NotFound } from '../pages/404'

export const App: React.FC<{}> = () => {
  return (
    <div id="App">
      <section>
        <h1 className="text-3xl text-primary">Скоро здесь будет игра🙂</h1>
        <button className="btn btn-active btn-accent">Начать</button>
        <Counter />
        <Canvas />
        <NotFound />
      </section>
    </div>
  )
}
