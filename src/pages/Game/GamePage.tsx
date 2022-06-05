import './GamePage.css'
import React from 'react'

import { GameComponent, GameMenu } from 'Components/game'
import { useGameManager } from 'Modules/gameManager'

const GamePage: React.FC = () => {
  const { isFirstGame, playerStatus, handleStartOfGame, handleEndOfGame } = useGameManager()
  const handleGoBack = () => {
    console.log('go back')
  }
  const isGameStarted = playerStatus === 'playing'

  return (
    <div className="">
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
export default GamePage
