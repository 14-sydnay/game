import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GameComponent, GameMenu } from 'components/game'
import { EndOfGameEvent } from 'components/game/GameComponent/type'
import { useAuth } from 'hooks/auth'
import { useGameManager } from 'modules/gameManager'
import { setLeader } from 'services/forum/forumService'

export const GamePage: React.FC = () => {
  const { user } = useAuth()
  const { isFirstGame, playerStatus, handleStartOfGame, handleEndOfGame } =
    useGameManager()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate('/', { replace: true })
  }
  const isGameStarted = playerStatus === 'playing'
  const handleEndOfGame2 = (e: EndOfGameEvent): void => {
    handleEndOfGame(e)
    if (e.playerStatus == 'win' && user) {
      const score = Math.floor(Math.random() * 100)
      void setLeader(user.id, user.displayName, score, user.avatar)
    }
  }

  return (
    <div className="m-0 flex h-screen items-center justify-center overflow-hidden p-0">
      {isGameStarted ? (
        <GameComponent onEndOfGame={handleEndOfGame2} />
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
