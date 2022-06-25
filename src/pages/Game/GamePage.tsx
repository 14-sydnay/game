import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GameComponent, GameMenu } from 'components/game'
import { useGameManager } from 'modules/gameManager'

export const GamePage: React.FC = () => {
  const { isFirstGame, playerStatus, handleStartOfGame, handleEndOfGame } =
    useGameManager()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate('/', { replace: true })
  }
  const isGameStarted = playerStatus === 'playing'

  return (
    <div className="m-0 flex h-screen items-center justify-center overflow-hidden p-0">
      {isGameStarted ? (
        <GameComponent onEndOfGame={handleEndOfGame} />
      ) : (
        <>
          {/* <p> You are {playerStatus}</p> */}
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
