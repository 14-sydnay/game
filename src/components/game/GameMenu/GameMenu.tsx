import React, { FC } from 'react'

import { Props } from './type'
import splashscreen from 'Assets/images/splashscreen.png'

export const GameMenu: FC<Props> = ({
  isFirstGame,
  onStartOfGame: handleStartOfGame,
  onEndOfGame: handleEndOfGame,
}) => {
  const buttons = isFirstGame ? (
    <button className="btn btn-primary" onClick={handleStartOfGame}>
      Старт
    </button>
  ) : (
    <>
      <button className="btn btn-primary" onClick={handleStartOfGame}>
        Повторить
      </button>
      <button className="btn btn-link" onClick={handleEndOfGame}>
        Вернуться в главное меню
      </button>
    </>
  )

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={splashscreen as string} />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">Элементы управления</h2>
        <div className="grow">
          <div className="flex w-full justify-center">
            <kbd className="kbd">▲</kbd>
          </div>
          <div className="flex w-full justify-center gap-12">
            <kbd className="kbd">◀︎</kbd>
            <kbd className="kbd">▶︎</kbd>
          </div>
        </div>
        <div className="card-actions justify-end self-end">{buttons}</div>
      </div>
    </div>
  )
}
