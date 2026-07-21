import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi2'
import { experience } from '../data/data'
import SectionWrapper from './SectionWrapper'

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white/[0.015]">
      <p className="section-eyebrow">Where I've worked</p>
      <h2 className="section-heading">Experience</h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
        Real infrastructure, real incidents, real lessons.
      </p>

      <div className="relative max-w-3xl mx-auto pl-10 sm:pl-12">
        <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

        {experience.map((job, i) => (
          <motion.div
            key={job.role + job.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
            className="relative mb-10 last:mb-0"
          >
            <div className="absolute -left-10 sm:-left-12 top-1 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <HiOutlineBriefcase className="text-white text-sm" />
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-heading font-semibold text-lg">{job.role}</h3>
                <span className="text-xs font-heading text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {job.duration}
                </span>
              </div>
              <p className="text-white/60 text-sm mb-4">{job.company}</p>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-white/70 text-sm flex gap-2 leading-relaxed">
                    <span className="text-secondary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
