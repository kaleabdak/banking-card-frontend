import { Landmark } from "lucide-react"

export function DebitCard() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d6a4f] via-[#3a7d5c] to-[#1b4332] p-4 text-card shadow-xl sm:p-6">
      {/* Decorative circles */}
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#ffffff08]" />
      <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[#ffffff06]" />

      <div className="relative flex h-full flex-col justify-between">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-card" />
            <span className="text-base font-bold text-card">MiniBank</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-card/70">
              Debit Card
            </span>
            <div className="h-8 w-10 rounded-md bg-chart-4 shadow-md" />
          </div>
        </div>

        {/* Card Number */}
        <p className="font-mono text-base font-medium tracking-[0.15em] text-card sm:text-xl sm:tracking-[0.2em] md:text-2xl">
          4410 8829 0012 9544
        </p>

        {/* Bottom Row */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-card/70">
              Card Holder
            </p>
            <p className="text-sm font-bold text-card">EYOB HABTIE</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-card/70">
              Expires
            </p>
            <p className="text-sm font-bold text-card">09/27</p>
          </div>
          {/* Mastercard Logo */}
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-[#eb001b] opacity-90" />
            <div className="-ml-3 h-8 w-8 rounded-full bg-chart-4 opacity-80" />
          </div>
        </div>
      </div>
    </div>
  )
}
