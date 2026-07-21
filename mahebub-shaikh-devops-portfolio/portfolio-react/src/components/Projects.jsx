import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/data'
import SectionWrapper from './SectionWrapper'

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="section-eyebrow">Selected work</p>
      <h2 className="section-heading">Projects</h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
        A few projects where I containerized, deployed, and automated real infrastructure.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-2xl p-6 flex flex-col relative overflow-hidden
              hover:shadow-glow-purple transition-shadow duration-300"
          >
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-primary scale-x-0
                group-hover:scale-x-100 origin-left transition-transform duration-500"
            />

            <h3 className="font-heading font-semibold text-lg mb-3 leading-snug">{project.title}</h3>
            <p className="text-white/65 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-heading px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-white/60">
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <FaGithub /> Code
              </a>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
