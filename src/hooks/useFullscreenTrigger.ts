import { useEffect, useCallback } from 'react'

type FullscreenHandler = () => void

export const useFullscreenTrigger = (handler: FullscreenHandler): void => {
  const eventListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'f') {
      handler()
    }
  }, [])
  useEffect(() => {
    window.addEventListener('keyup', eventListener)
    return () => {
      window.removeEventListener('keyup', eventListener)
    }
  })
}
