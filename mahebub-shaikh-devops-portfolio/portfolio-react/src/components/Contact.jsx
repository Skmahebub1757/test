import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'
import { contactInfo, socials } from '../data/data'
import SectionWrapper from './SectionWrapper'
import RippleButton from './RippleButton'

const infoCards = [
  { icon: HiOutlineEnvelope, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: HiOutlinePhone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
  { icon: HiOutlineMapPin, label: 'Location', value: contactInfo.location, href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up — opens the user's mail client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <SectionWrapper id="contact">
      <p className="section-eyebrow">Get in touch</p>
      <h2 className="section-heading">Contact</h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
        Have a role, project, or question in mind? I'd love to hear from you.
      </p>

      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {infoCards.map((c) => (
            <div key={c.label} className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-lg">
                <c.icon />
              </div>
              <div>
                <p className="text-xs text-white/50 font-heading">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-sm font-medium hover:text-accent transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{c.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="glass rounded-2xl p-5">
            <p className="text-xs text-white/50 font-heading mb-3">Find me online</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                    hover:bg-gradient-primary hover:border-transparent transition-all duration-300"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-heading text-white/60">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-heading text-white/60">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-heading text-white/60">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about the opportunity or project..."
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <RippleButton type="submit" variant="gradient" className="self-start mt-2">
            {status === 'sent' ? 'Opening mail client…' : 'Send Message'}
          </RippleButton>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
