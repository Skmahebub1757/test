import { motion } from 'framer-motion'
import { FaDocker, FaAws, FaLinux } from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'
import useTypingEffect from '../hooks/useTypingEffect'
import { heroTypingStrings } from '../data/data'
import RippleButton from './RippleButton'

const floatIcons = [
  { Icon: FaDocker, className: 'top-[12%] left-[6%]', delay: 0 },
  { Icon: SiKubernetes, className: 'top-[65%] left-[10%]', delay: 0.6 },
  { Icon: FaAws, className: 'top-[20%] right-[8%]', delay: 0.3 },
  { Icon: FaLinux, className: 'top-[68%] right-[12%]', delay: 0.9 },
]

export default function Hero() {
  const typed = useTypingEffect(heroTypingStrings)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden bg-gradient-radial-glow"
    >
      {/* Floating background icons */}
      {floatIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`hidden sm:block absolute ${className} text-4xl text-white/10 animate-float`}
          style={{ animationDelay: `${delay}s` }}
          aria-hidden="true"
        >
          <Icon />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm <span className="gradient-text">Mahebub Shaikh</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-heading text-lg sm:text-2xl text-white/80"
        >
          DevOps Engineer | Cloud &amp; Kubernetes Enthusiast
        </motion.h2>

        <div className="mt-4 h-8 font-heading text-base sm:text-lg text-accent">
          <span>{typed}</span>
          <span className="border-r-2 border-accent ml-1 animate-blink" aria-hidden="true" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate DevOps Engineer with experience in Docker, Kubernetes, AWS, Linux, CI/CD, and
          Infrastructure Automation. I enjoy building scalable, secure, and reliable cloud-native
          applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <RippleButton as="a" href="/resume.pdf" download variant="gradient">
            Download Resume
          </RippleButton>
          <RippleButton as="a" href="#contact" variant="outline">
            Contact Me
          </RippleButton>
        </motion.div>
      </div>
    </section>
  )
}
