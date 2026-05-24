import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const CONTACT_DETAILS = [
  { label: 'Dubai', value: '+971 50 636 9524' },
  { label: 'London', value: '+44 333 090 5268' },
  { label: 'Email', value: 'team@caworks.co' },
  { label: 'Web', value: 'caworks.co' },
  { label: 'Response', value: 'Within 48 hours, guaranteed' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-theme-deep border-t border-theme-rule px-6 md:px-8 lg:px-14 py-20 lg:py-[120px]" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title text-theme-primary mb-7">Begin Your<br />Commission</h2>
          <p className="text-sm text-theme-dim leading-[1.9] mb-12">
            Whether you are an interior designer with precise specifications, a developer briefing a hospitality fit-out, or a homeowner imagining something entirely new — we are here to listen, advise, and deliver.
          </p>
          <div className="flex flex-col gap-5">
            {CONTACT_DETAILS.map((d) => (
              <div key={d.label} className="flex gap-4 items-start">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold font-medium min-w-[70px] mt-0.5">
                  {d.label}
                </span>
                <span className="text-sm text-theme-dim">{d.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-theme-surface border border-theme-rule p-[60px_52px] max-md:p-9"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="font-display text-3xl text-gold-light mb-4">✓</div>
              <h3 className="font-display text-[1.8rem] font-light text-theme-primary mb-2">Thank You</h3>
              <p className="text-sm text-theme-dim">Your enquiry has been received. Our design team will be in touch within 48 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-[1.8rem] font-light text-theme-primary mb-2">Request a Free Consultation</h3>
              <p className="text-sm text-theme-dim mb-9">
                Tell us about your project and our design team will be in touch within 48 hours.
              </p>

              <form
                action="https://formspree.io/f/xgvawbna"
                method="POST"
                onSubmit={() => setSubmitted(true)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" placeholder="Your name" className="form-input" required />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" placeholder="Your surname" className="form-input" required />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" placeholder="you@example.com" className="form-input" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Project Type</label>
                  <select name="projectType" className="form-input" required>
                    <option value="">Select a category</option>
                    <option>Private Residence</option>
                    <option>Luxury Hotel / Hospitality</option>
                    <option>Commercial Office</option>
                    <option>Retail / Restaurant</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Tell Us About Your Project</label>
                  <textarea name="message" className="form-input min-h-[90px]" placeholder="Describe your space, vision, and timeline…" required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-black text-xs tracking-[0.22em] uppercase font-semibold px-9 py-4 border-none cursor-pointer transition-all duration-300 hover:bg-gold-light font-body"
                >
                  Submit Enquiry
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
