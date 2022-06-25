import { useEffect, useRef } from 'react'

type FullscreenHandler = () => void

export const useFullscreenTrigger = (handler: FullscreenHandler): void => {
  const handlerRef = useRef(handler)

  useEffect(() => {
    const eventListener = (e: KeyboardEvent) => {
      if (e.key === 'f') {
        handlerRef.current()
      }
    }

    window.addEventListener('keyup', eventListener)
    return () => {
      window.removeEventListener('keyup', eventListener)
    }
  }, [handlerRef])
}
