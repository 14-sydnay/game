import React, { useRef, useEffect } from 'react'

export const Canvas: React.FC<{}> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d')
      const ctx = canvasCtxRef.current
      if (ctx === null) throw new Error('ctx is null')
      ctx.beginPath()
      ctx.arc(95, 50, 40, 0, 2 * Math.PI)
      ctx.stroke()
    }
  }, [])

  return <canvas ref={canvasRef}></canvas>
}
