import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/**
 * Wraps a <section> with a fade-in-slide-up reveal animation
 * that triggers once when scrolled into view.
 */
export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 px-6 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}
