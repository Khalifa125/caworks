export default function ChatWidget() {
  return (
    <div className="fixed bottom-9 right-6 md:right-9 z-200 flex flex-col items-end gap-3">
      <div className="bg-theme-surface border border-theme-rule px-5 py-3 flex items-center gap-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
        <span className="w-[7px] h-[7px] rounded-full bg-green-400 animate-pulse shrink-0" />
        <div>
          <div className="text-sm text-theme-primary font-medium tracking-[0.05em]">Menna</div>
          <div className="text-[0.6rem] tracking-[0.12em] uppercase text-gold">Sr. Design Consultant · Online Now</div>
        </div>
      </div>
      <button
        onClick={() => window.open('https://wa.me/971506369524', '_blank')}
        className="bg-gold text-black border-none px-7 py-3.5 font-body text-[0.65rem] tracking-[0.2em] uppercase font-semibold cursor-pointer transition-all duration-300 hover:bg-gold-light flex items-center gap-2"
      >
        <span>WhatsApp Menna</span> →
      </button>
    </div>
  )
}
