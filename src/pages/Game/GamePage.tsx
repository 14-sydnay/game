import React from 'react'

import { GameComponent, GameMenu } from 'components/game'
import { useGameManager } from 'modules/gameManager'

export const GamePage: React.FC = () => {
  const { isFirstGame, playerStatus, handleStartOfGame, handleEndOfGame } =
    useGameManager()
  const handleGoBack = () => {
    console.log('go back')
  }
  const isGameStarted = playerStatus === 'playing'

  return (
    <div className="m-0 flex h-screen items-center justify-center overflow-hidden bg-black p-0">
      {isGameStarted ? (
        <GameComponent onEndOfGame={handleEndOfGame} />
      ) : (
        <>
          <p> You are {playerStatus}</p>
          <GameMenu
            isFirstGame={isFirstGame}
            onStartOfGame={handleStartOfGame}
            onEndOfGame={handleGoBack}
          />
        </>
      )}
    </div>
  )
}
