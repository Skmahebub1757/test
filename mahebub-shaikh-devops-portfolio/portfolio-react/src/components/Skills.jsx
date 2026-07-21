import { motion } from 'framer-motion'
import { skillCategories } from '../data/data'
import SectionWrapper from './SectionWrapper'

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white/[0.015]">
      <p className="section-eyebrow">What I work with</p>
      <h2 className="section-heading">Skills</h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
        Tools and technologies I use to build, ship, and operate infrastructure.
      </p>

      <div className="space-y-12">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-5 justify-center sm:justify-start">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center text-base">
                <cat.icon />
              </div>
              <h3 className="font-heading font-semibold text-lg">{cat.title}</h3>
            </div>

            <motion.div
              variants={groupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="glass rounded-xl p-4 flex flex-col items-center gap-2 text-center
                    cursor-default hover:shadow-glow hover:border-primary/40 transition-shadow duration-300"
                >
                  <skill.icon className="text-2xl text-accent" />
                  <span className="text-xs font-heading text-white/75">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
