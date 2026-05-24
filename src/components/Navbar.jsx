import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-8 lg:px-14 py-6 lg:py-7 transition-all duration-500 ${
        scrolled ? 'bg-black/95 shadow-[0_1px_0_var(--color-rule)]' : 'bg-gradient-to-b from-black/95 to-transparent'
      }`}
    >
      <a href="#" className="font-display text-[1.35rem] tracking-[0.35em] uppercase text-ivory no-underline">
        CAWORKS
      </a>

      <button
        className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[1.5px] bg-ivory transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-ivory transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 right-0 bg-black/98 lg:bg-transparent border-b border-rule/50 lg:border-none p-6 lg:p-0 gap-4 lg:gap-9 items-start lg:items-center`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-[0.2em] uppercase text-ivory-dim no-underline transition-colors duration-300 hover:text-gold-light font-body font-normal"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-xs tracking-[0.2em] uppercase text-gold-light no-underline border border-gold px-5 py-2 transition-all duration-300 hover:bg-gold hover:text-black font-body font-normal"
        >
          Request a Quote
        </a>
      </div>
    </nav>
  )
}
