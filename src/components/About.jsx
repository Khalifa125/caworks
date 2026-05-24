import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeSection({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const CREDENTIALS = [
  { num: 'UAE', label: 'In-house Fabrication' },
  { num: '9+', label: 'Landmark Projects' },
  { num: '5★', label: 'Hotel Partnerships' },
  { num: '2', label: 'Global Studios' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-theme-deep border-t border-theme-rule px-6 md:px-8 lg:px-14 py-20 lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-start">
        <div className="lg:sticky lg:top-[120px]">
          <FadeSection>
            <div className="section-tag">Our Philosophy</div>
            <h2 className="section-title text-theme-primary">The Art of<br />Defining Space</h2>
          </FadeSection>
          <FadeSection>
            <blockquote className="font-display text-[clamp(26px,3vw,40px)] font-light italic leading-tight text-theme-primary my-8 lg:my-[32px_0_40px] border-l-2 border-gold pl-7">
              &ldquo;Every space deserves a defining moment — a surface that stops you still.&rdquo;
            </blockquote>
          </FadeSection>
          <FadeSection>
            <div className="grid grid-cols-2 gap-5">
              {CREDENTIALS.map((c) => (
                <div key={c.num} className="border border-theme-rule p-[22px_24px] bg-theme-faint">
                  <div className="font-display text-3xl lg:text-[2rem] font-light text-gold-light leading-none">{c.num}</div>
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-theme-dim mt-1.5">{c.label}</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>

        <div className="pt-2">
          {[
            'CAWORKS was founded in London in 2017 with a singular purpose: to elevate architectural glass from a functional material into a vehicle for extraordinary artistic expression. We serve the world\'s most discerning clients — from private villa owners to the general managers of five-star international hotels.',
            'Our work spans hand-gilded verre églomisé panels, architecturally backlit glass ceilings, bespoke decorative mirrors, and feature walls printed at monumental scale. Each commission is designed from the first sketch to the final installation by our in-house team — never outsourced, never compromised.',
            'With the opening of our Dubai atelier, we now offer the full depth of our London expertise to clients across the Gulf, with in-house fabrication and project management based in the UAE.',
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-theme-dim leading-[1.95] mb-5"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
