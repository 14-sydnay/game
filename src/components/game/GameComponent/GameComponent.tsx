import React, { useRef, useEffect } from 'react';
import { Game, KeysContoller, Scene } from 'Modules/game';
import { Props } from './type';

export const GameComponent: Props = ({ onEndOfGame: onEndOfGame }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const keyController = new KeysContoller(
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
  );
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new Scene(
        canvasRef.current.width,
        canvasRef.current.height
      );
      const ctx = canvasRef.current.getContext('2d')!;
      const game = new Game(scene, ctx, keyController, onEndOfGame);
      game.start();
    }
  }, []);
  return <canvas ref={canvasRef} width="1920" height="1080"></canvas>;
};
