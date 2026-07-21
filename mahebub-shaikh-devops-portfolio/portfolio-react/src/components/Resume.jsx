import { motion } from 'framer-motion'
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import RippleButton from './RippleButton'

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="bg-white/[0.015]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-10 sm:p-14 text-center max-w-3xl mx-auto"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl mb-6 shadow-glow">
          <HiOutlineDocumentArrowDown />
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Want the full picture?</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Download my resume for a complete breakdown of my education, experience, and technical
          skill set.
        </p>
        <RippleButton as="a" href="/resume.pdf" download variant="gradient">
          Download Resume
        </RippleButton>
      </motion.div>
    </SectionWrapper>
  )
}
