import { EndOfGameEvent } from 'components/game/GameComponent/type'
import { useState } from 'react'
import { PlayerStatus } from '../type'

export const useGameManager = () => {
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>('idle')
  const [numberOfAttempts, setNumberOfAttempts] = useState(0)
  const handleStartOfGame = () => {
    setNumberOfAttempts(numberOfAttempts + 1)
    setPlayerStatus('playing')
  }
  const handleEndOfGame = (e: EndOfGameEvent) => {
    const playerStatus = e.playerStatus === 'win' ? 'win' : 'lose'
    setPlayerStatus(playerStatus)
  }
  return {
    isFirstGame: numberOfAttempts === 0,
    playerStatus,
    handleStartOfGame,
    handleEndOfGame,
  }
}
