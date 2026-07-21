import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi2'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-primary
            shadow-glow flex items-center justify-center hover:scale-110 active:scale-95
            transition-transform"
        >
          <HiArrowUp className="text-white text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
