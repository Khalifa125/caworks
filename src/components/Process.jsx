import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Consultation', desc: 'A free design consultation with our senior specialist — in person or via video. We review your space, discuss your vision, and advise on the best application, finish, and scale. Typically completed within 48 hours of enquiry.' },
  { num: '02', title: 'Design & Quotation', desc: 'Our studio develops detailed design drawings, material samples, and finish options tailored to your project. A comprehensive, transparent quotation is issued within 48 hours of the consultation.' },
  { num: '03', title: 'In-house Fabrication', desc: 'Every panel is manufactured in our own Dubai facility. We control every stage — gilding, backlighting, cutting, and finishing — with no third-party involvement. Lead times are communicated at quotation.' },
  { num: '04', title: 'Installation & Completion', desc: 'Our specialist installation team handles every project from delivery to final fixing. We coordinate with your contractor, site manager, or interior designer to ensure a seamless, zero-disruption process.' },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-[48px_36px] border-r border-b lg:border-b-0 border-theme-rule last:border-r-0"
    >
      <span className="font-display text-[3.5rem] font-light leading-none mb-8 block text-gold-dim">
        {step.num}
      </span>
      <h3 className="font-display text-[1.2rem] font-normal text-theme-primary mb-3.5">{step.title}</h3>
      <p className="text-sm text-theme-dim leading-[1.85]">{step.desc}</p>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-theme-primary px-6 md:px-8 lg:px-14 py-20 lg:py-[120px]" id="process">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">How We Work</div>
            <h2 className="section-title text-theme-primary">From Concept<br />to Installation</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-theme-rule mt-[72px]">
          {STEPS.map((s, i) => (
            <StepCard key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
