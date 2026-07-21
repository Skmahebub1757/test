import { motion } from 'framer-motion'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { certifications } from '../data/data'
import SectionWrapper from './SectionWrapper'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <p className="section-eyebrow">Credentials</p>
      <h2 className="section-heading">Certifications</h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
        Formal recognition to back up the hands-on work.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-shadow duration-300"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center text-xl mb-4">
              <HiOutlineBadgeCheck />
            </div>
            <h3 className="font-heading font-semibold text-sm mb-2 leading-snug">{cert.title}</h3>
            <p className="text-white/55 text-xs">{cert.issuer}</p>
            <p className="text-accent text-xs font-heading mt-1">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
