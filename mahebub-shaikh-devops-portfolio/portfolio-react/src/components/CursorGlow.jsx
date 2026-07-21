import { useEffect, useRef, useState } from 'react'

/**
 * Subtle custom cursor dot that follows the pointer and grows on hover
 * over interactive elements. Disabled on touch devices and when the
 * user prefers reduced motion.
 */
export default function CursorGlow() {
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(!isTouch && !prefersReduced)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current

    const move = (e) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const grow = () => {
      dot.style.width = '44px'
      dot.style.height = '44px'
      dot.style.background = 'rgba(139, 92, 246, 0.15)'
    }
    const shrink = () => {
      dot.style.width = '22px'
      dot.style.height = '22px'
      dot.style.background = 'transparent'
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, input, textarea').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, input, textarea').forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [enabled])

  if (!enabled) return null
  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
}
