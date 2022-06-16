import { useState } from 'react'

import { PlayerStatus } from '../type'
import { EndOfGameEvent } from 'Components/game/GameComponent/type'

export const useGameManager = () => {
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>('idle')
  const [numberOfAttempts, setNumberOfAttempts] = useState(0)
  const handleStartOfGame = () => {
    setNumberOfAttempts(numberOfAttempts + 1)
    setPlayerStatus('playing')
  }
  const handleEndOfGame = (e: EndOfGameEvent) => {
    const pStatus = e.playerStatus === 'win' ? 'win' : 'lose'
    setPlayerStatus(pStatus)
  }
  return {
    isFirstGame: numberOfAttempts === 0,
    playerStatus,
    handleStartOfGame,
    handleEndOfGame,
  }
}
