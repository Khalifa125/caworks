const FOOTER_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
  { label: 'caworks.co', href: 'https://caworks.co' },
]

export default function Footer() {
  return (
    <footer className="bg-theme-primary border-t border-theme-rule px-6 md:px-8 lg:px-14 py-[56px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
        <div>
          <div className="font-display text-[1.1rem] tracking-[0.3em] uppercase text-theme-primary">
            CAWORKS
          </div>
          <div className="text-[0.65rem] tracking-[0.15em] uppercase text-theme-dim mt-1">
            Artistic Architectural Glass · Dubai &amp; London
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-7">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.62rem] tracking-[0.16em] uppercase text-theme-dim no-underline transition-colors duration-300 hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-[0.62rem] tracking-[0.1em] text-theme-faint">
          © CAWORKS 2026
        </div>
      </div>
    </footer>
  )
}
