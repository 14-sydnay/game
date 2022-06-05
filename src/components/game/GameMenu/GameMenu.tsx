import React, { FC } from 'react'

import { Props } from './type'

export const GameMenu: FC<Props> = ({
  isFirstGame,
  onStartOfGame: handleStartOfGame,
  onEndOfGame: handleEndOfGame,
}) => {
  if (isFirstGame) return <button onClick={handleStartOfGame}>Старт</button>
  else
    return (
      <>
        <button onClick={handleStartOfGame}>Повторить</button>
        <button onClick={handleEndOfGame}>Вернуться в главное меню</button>
      </>
    )
}
