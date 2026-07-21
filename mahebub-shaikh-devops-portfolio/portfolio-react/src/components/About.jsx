import { motion } from 'framer-motion'
import { HiOutlineCloud, HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'

const points = [
  {
    icon: HiOutlineCloud,
    title: 'Cloud-Native Focus',
    text: 'Hands-on experience provisioning and managing AWS infrastructure, from EC2 and VPC to IAM and S3.',
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: 'Automation-Minded',
    text: 'I enjoy replacing manual, repeatable work with pipelines and Infrastructure as Code that just work.',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Continuous Learner',
    text: 'Always exploring new tools in the DevOps ecosystem — currently deepening my Kubernetes and Terraform skills.',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Problem Solver',
    text: 'I like debugging deployments under pressure and turning fragile systems into reliable ones.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <p className="section-eyebrow">Get to know me</p>
      <h2 className="section-heading">About Me</h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
        I'm a DevOps Engineer who's passionate about building the invisible layer that keeps
        applications running — reliable pipelines, secure cloud infrastructure, and systems that
        scale without drama.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-2xl p-6 flex gap-4 hover:shadow-glow transition-shadow duration-300"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-xl">
              <p.icon />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
