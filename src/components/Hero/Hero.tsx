import React from 'react'

import background from 'Images/background.png'

export const Hero: React.FC<{}> = () => {
  return (
    <section
      className="hero h-full"
      style={{
        backgroundImage: `url(${String(background)})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-base-100">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Red Runner</h1>
          <p className="mb-5 text-xl">
            Увлекательная игра для всех желающих провести время в прекрасном месте. Игра
            представляет собой простейший виртуальный мир, в котором вы можете управлять персонажем,
            собирая клад.
          </p>
          <button className="btn btn-primary">НАЧАТЬ ИГРАТЬ!</button>
        </div>
      </div>
    </section>
  )
}
