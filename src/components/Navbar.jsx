import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-8 lg:px-14 py-6 lg:py-7 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A08]/95 shadow-[0_1px_0_rgba(184,149,63,0.25)]'
          : 'bg-gradient-to-b from-[#0A0A08]/95 to-transparent'
      }`}
    >
      <a href="#" className="font-display text-[1.35rem] tracking-[0.35em] uppercase text-[#F5F0E8] no-underline">
        CAWORKS
      </a>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="w-9 h-9 flex items-center justify-center bg-transparent border border-[rgba(184,149,63,0.25)] cursor-pointer transition-all duration-300 hover:border-[#B8953F] text-sm text-[#F5F0E8]"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? '☀' : '☾'}
        </button>

        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 right-0 bg-[#0A0A08] lg:bg-transparent border-b border-[rgba(184,149,63,0.25)] lg:border-none p-6 lg:p-0 gap-4 lg:gap-9 items-start lg:items-center`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/65 no-underline transition-colors duration-300 hover:text-[#D4AF6A] font-body font-normal"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-xs tracking-[0.2em] uppercase text-[#D4AF6A] no-underline border border-[#B8953F] px-5 py-2 transition-all duration-300 hover:bg-[#B8953F] hover:text-[#0A0A08] font-body font-normal"
        >
          Request a Quote
        </a>
      </div>
    </nav>
  )
}
