import { socials } from '../data/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-heading font-semibold">
          Mahebub<span className="gradient-text">.dev</span>
        </p>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                hover:bg-gradient-primary hover:border-transparent transition-all duration-300"
            >
              <s.icon className="text-sm" />
            </a>
          ))}
        </div>

        <p className="text-white/50 text-xs">© 2026 Mahebub Shaikh. All rights reserved.</p>
      </div>
    </footer>
  )
}
