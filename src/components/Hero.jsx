import AnimatedCounter from './AnimatedCounter'

const Hero = () => (
  <section className="relative min-h-svh lg:min-h-screen flex flex-col justify-end px-6 md:px-8 lg:px-14 pb-16 md:pb-20 overflow-hidden bg-[#0A0A08]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_65%_40%,rgba(184,149,63,0.07)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_20%_80%,rgba(184,149,63,0.04)_0%,transparent_60%),linear-gradient(165deg,#0f0f0c_0%,#0a0a08_40%,#0d0c09_100%)]" />

    <div className="absolute top-0 right-0 w-[52%] h-full pointer-events-none opacity-40 lg:opacity-100"
      style={{
        backgroundImage: 'linear-gradient(rgba(184,149,63,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,149,63,0.06) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 70%)',
        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 70%)',
      }}
    />

    <div className="absolute right-[6%] top-1/2 -translate-y-1/2 text-[clamp(260px,28vw,420px)] font-display font-light leading-none pointer-events-none select-none hidden lg:block"
      style={{ WebkitTextStroke: '1px rgba(184,149,63,0.08)', color: 'transparent' }}
    >
      G
    </div>

    <div className="flex items-center gap-4 mb-7">
      <span className="text-xs tracking-[0.28em] uppercase text-[#B8953F] font-medium">Est. London · 2017</span>
      <span className="flex-1 h-[1px] max-w-[80px]" style={{ background: 'rgba(184,149,63,0.25)' }} />
    </div>

    <h1 className="font-display text-[clamp(52px,7.5vw,108px)] font-light leading-[1.02] -tracking-[0.01em] mb-8 max-w-[760px] text-[#F5F0E8]">
      Where glass<br />becomes <em className="italic text-[#D4AF6A] not-italic">art</em>
    </h1>

    <p className="max-w-[520px] text-sm text-[#F5F0E8]/65 leading-[1.9] font-light mb-[52px]">
      A bespoke glass atelier with eight years of London excellence — transforming high-end residences and luxury hospitality spaces into extraordinary, lasting experiences. Now serving the Middle East from Dubai.
    </p>

    <div className="flex items-center gap-8 flex-wrap">
      <a
        href="https://wa.me/971506369524"
        className="bg-[#B8953F] text-[#0A0A08] text-xs tracking-[0.22em] uppercase font-semibold px-9 py-4 no-underline transition-all duration-300 hover:bg-[#D4AF6A] hover:-translate-y-0.5"
      >
        Speak with Our Designer
      </a>
      <a
        href="#products"
        className="text-xs tracking-[0.22em] uppercase font-medium text-[#F5F0E8]/65 no-underline flex items-center gap-2.5 transition-colors duration-300 hover:text-[#D4AF6A] group"
      >
        Explore Our Work
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>

    <div className="flex flex-row gap-8 md:gap-10 mt-12 lg:mt-0 lg:absolute lg:right-14 lg:bottom-36 z-10 lg:flex-col lg:items-end">
      {[
        { num: '8', suffix: '', label: 'Years of London Excellence' },
        { num: '48', suffix: 'h', label: 'Quote Turnaround' },
        { num: '300', suffix: '°', label: 'Heat Resistance' },
      ].map((s) => (
        <div key={s.label} className="text-left lg:text-right">
          <div className="font-display text-[2.6rem] font-light text-[#D4AF6A] leading-none -tracking-[0.02em]">
            <AnimatedCounter value={s.num} suffix={s.suffix} />
          </div>
          <div className="text-[0.58rem] tracking-[0.2em] uppercase text-[#F5F0E8]/65 mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Hero
