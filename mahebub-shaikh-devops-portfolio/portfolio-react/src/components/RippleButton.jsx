import { useRef } from 'react'

/**
 * Button with a material-style ripple effect on click.
 * variant: 'gradient' | 'outline'
 */
export default function RippleButton({ children, onClick, variant = 'gradient', as = 'button', href, className = '', ...rest }) {
  const ref = useRef(null)

  const createRipple = (e) => {
    const btn = ref.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const span = document.createElement('span')
    span.className = 'ripple-span'
    span.style.width = span.style.height = `${size}px`
    span.style.left = `${e.clientX - rect.left - size / 2}px`
    span.style.top = `${e.clientY - rect.top - size / 2}px`
    btn.appendChild(span)
    setTimeout(() => span.remove(), 600)
  }

  const handleClick = (e) => {
    createRipple(e)
    onClick?.(e)
  }

  const base = variant === 'gradient' ? 'btn-gradient' : 'btn-outline'
  const Tag = as

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={handleClick}
      className={`${base} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
