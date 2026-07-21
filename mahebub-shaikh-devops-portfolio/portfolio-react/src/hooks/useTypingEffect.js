import { useEffect, useState } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 */
export default function useTypingEffect(strings, { typingSpeed = 65, deletingSpeed = 35, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[index % strings.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, strings, typingSpeed, deletingSpeed, pause])

  return text
}
