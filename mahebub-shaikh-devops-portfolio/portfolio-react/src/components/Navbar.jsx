import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks } from '../data/data'
import useActiveSection from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-heading font-bold text-lg tracking-tight">
          Mahebub<span className="gradient-text">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-heading text-sm">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-primary rounded-full"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          className="md:hidden text-2xl"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass mx-4 mt-4 rounded-2xl"
          >
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/5 last:border-none">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 font-heading text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
