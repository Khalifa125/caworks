import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PRODUCTS = [
  { icon: '◈', name: 'Backlit Glass Panels & Ceilings', desc: 'LED-illuminated glass that floods interiors with warm, diffused architectural light. Applied to walls, ceilings, reception counters, bar surfaces, and bedroom headboards — in any colour temperature or pattern.', tags: ['Hotels', 'Residences', 'Bars'], num: '01' },
  { icon: '✦', name: 'Gold Leaf & Verre Églomisé', desc: 'The ancient craft of reverse gilding — 24ct gold, antique silver, rose gold, or champagne leaf applied by hand to the reverse face of glass. Every panel is entirely unique, deeply luminous, and enduring.', tags: ['Art Deco', 'Orientalist', 'Luxury'], num: '02' },
  { icon: '⌀', name: 'Decorative & Artistic Mirrors', desc: 'Bespoke hand-sprayed mirrors with patterns applied from behind the glass — permanent, even, and visually arresting. Available in custom shapes, aged finishes, tinted glass, and full feature mirror walls.', tags: ['Living Rooms', 'Entryways', 'Feature Walls'], num: '03' },
  { icon: '◇', name: 'Wetroom & Shower Panels', desc: 'Luxury shower and wetroom enclosures in decorative glass, rated moisture and heat resistant to 300°C. A complete alternative to tile — patterned, frosted, coloured, or finished with gold-leaf accents.', tags: ['Bathrooms', 'Steam Rooms', 'Saunas'], num: '04' },
  { icon: '⊞', name: 'Kitchen Splashbacks & Islands', desc: 'Fully hob-safe at 300°C, zero maintenance, and infinitely customisable. Plain bold colour glass, backlit amber warmth, or gold leaf behind an island. Any shape, any size, including curved hob surrounds.', tags: ['Kitchens', 'Home Bars', 'Islands'], num: '05' },
  { icon: '▦', name: 'Feature Walls & Claddings', desc: 'Any image, pattern, or artwork reproduced on glass at architectural scale. Moorish geometry, pop art, onyx-look, abstract metallic — single continuous sheets produced up to 8 metres wide.', tags: ['Hotels', 'Villas', 'Commercial'], num: '06' },
  { icon: '⊟', name: 'Entryways, Receptions & Lobbies', desc: 'The arrival sequence sets every expectation. Our backlit panels, gold leaf wall features, and decorative glass installations are designed to establish immediate, undeniable luxury from the threshold onwards.', tags: ['Hotels', 'Offices', 'Residences'], num: '07' },
  { icon: '⊕', name: 'Lifts, Bars & Statement Surfaces', desc: 'Lift cars clad in gold leaf or backlit glass transform an overlooked transit into a luxury moment. Bar counters that illuminate from within become the most photographed feature of any hospitality venue.', tags: ['Lifts', 'Bars', 'Counters'], num: '08' },
  { icon: '△', name: 'Bespoke Staircases', desc: 'Architectural staircases incorporating decorative glass balustrades, illuminated treads, and gold-leaf accents. From private residences to landmark commercial interiors.', tags: ['Residential', 'Commercial'], num: '09', highlight: true },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-[48px_40px_40px] border border-transparent transition-all duration-400 overflow-hidden cursor-default group
        ${product.highlight ? 'bg-gold-dim border-rule' : 'bg-surface hover:bg-ink hover:border-rule'}`}
    >
      {/* Hover line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-transparent scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

      <div className={`text-2xl mb-7 ${product.highlight ? 'opacity-60 text-sm' : 'text-gold opacity-80'}`}>
        {product.icon}
      </div>
      <h3 className={`font-display ${product.highlight ? 'text-lg' : 'text-[1.3rem]'} font-normal mb-3.5 leading-tight`}>
        {product.name}
      </h3>
      <p className="text-sm text-ivory-dim leading-[1.85] mb-6">{product.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {product.tags.map((t) => (
          <span key={t} className="text-[0.58rem] tracking-[0.16em] uppercase text-gold border border-gold/30 px-[10px] py-[4px]">
            {t}
          </span>
        ))}
      </div>
      <div className="absolute bottom-7 right-8 font-display text-6xl font-light leading-none transition-colors duration-400 select-none"
        style={{ color: product.highlight ? 'rgba(184,149,63,0.12)' : 'rgba(184,149,63,0.05)' }}
      >
        {product.num}
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section className="bg-black px-6 md:px-8 lg:px-14 py-20 lg:py-[120px]" id="products">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-[72px]">
          <div>
            <div className="section-tag">Our Specialisms</div>
            <h2 className="section-title">Products &<br />Applications</h2>
          </div>
          <a href="#contact" className="text-xs tracking-[0.22em] uppercase font-medium text-ivory-dim no-underline flex items-center gap-2.5 transition-colors duration-300 hover:text-gold-light group self-start lg:self-end">
            View All Products
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.num} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
