
import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPositon] = useState(0);

  useEffect(() => {
    const updatePositon = () => {
      setScrollPositon(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePositon)

    return () => window.removeEventListener('scroll', updatePositon)

  }, [])

  return scrollPosition;
}
