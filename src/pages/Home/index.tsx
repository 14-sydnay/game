import React from 'react'

import { Canvas } from '../../components'
import { Counter } from '../../features/counter'

export const Home: React.FC<{}> = () => {
  return (
    <section>
      <h1 className="text-3xl text-primary">Скоро здесь будет игра🙂</h1>
      <button className="btn btn-active btn-accent">Начать</button>
      <Counter />
      <Canvas />
    </section>
  )
}
