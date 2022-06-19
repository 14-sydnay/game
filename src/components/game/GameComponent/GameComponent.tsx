import React, { useRef, useEffect, useCallback } from 'react'

import { Props } from './type'
import { useFullscreenTrigger } from 'Hooks'
import { Game, KeysContoller, Scene } from 'Modules/game'

export const GameComponent: Props = ({ onEndOfGame: onEndOfGame }) => {
  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      }
    }
  }, [])
  useFullscreenTrigger(toggleFullscreen)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  //

  useEffect(() => {
    const keyController = new KeysContoller('ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight')
    if (canvasRef.current) {
      const scene = new Scene(canvasRef.current.width, canvasRef.current.height)
      const ctx = canvasRef.current.getContext('2d')!
      const game = new Game(scene, ctx, keyController, onEndOfGame)
      game.start()
    }
    return () => {
      keyController.destroy()
    }
  }, [canvasRef, onEndOfGame])
  return <canvas ref={canvasRef} width="1920" height="1080"></canvas>
}
