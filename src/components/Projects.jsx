import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  { name: 'Four Seasons Trinity Square', city: 'London', type: 'Hospitality' },
  { name: 'Nobu Hotel Shoreditch', city: 'London', type: 'Hospitality' },
  { name: 'Biltmore Hotel Mayfair', city: 'London', type: 'Hospitality' },
  { name: 'Hilton Kensington', city: 'London', type: 'Hospitality' },
  { name: 'Old War Office, Whitehall', city: 'London', type: 'Hospitality' },
  { name: 'Damac Tower by Versace', city: 'London', type: 'Residential' },
  { name: 'Four Seasons Private Residences', city: 'London', type: 'Residential' },
  { name: 'Mayo Clinic, Regent Street', city: 'London', type: 'Commercial' },
  { name: 'Iona Cruise Ship', city: 'United Kingdom', type: 'Hospitality' },
]

function ProjectRow({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[2fr_1fr_1fr_80px] max-md:grid-cols-[1fr_60px] items-center py-7 border-b border-theme-rule transition-colors duration-300 hover:bg-theme-faint cursor-default gap-5 group"
    >
      <div className="font-display text-[1.25rem] font-normal text-theme-primary">{project.name}</div>
      <div className="text-sm text-theme-dim tracking-[0.05em] max-md:hidden">{project.city}</div>
      <div className="text-[0.6rem] tracking-[0.18em] uppercase text-gold border border-gold/30 px-3 py-1 justify-self-start max-md:hidden">
        {project.type}
      </div>
      <div className="text-base text-gold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-right">
        →
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-theme-deep border-t border-theme-rule px-6 md:px-8 lg:px-14 py-20 lg:py-[120px]" id="projects">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="max-w-[580px] mb-[72px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">Notable Commissions</div>
            <h2 className="section-title text-theme-primary">Landmark<br />Projects</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm text-theme-dim leading-[1.9] mt-5"
          >
            From Mayfair to Kensington, our installations are featured in some of the world's most prestigious hospitality and residential properties.
          </motion.p>
        </div>

        <div className="border-t border-theme-rule">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
