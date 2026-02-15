// app/sell/page.tsx
export default function SellPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Sell / List IP</h1>
        <p className="mt-2 text-sm text-white/60">Submission UI only. Workflow text can be refined later.</p>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none" placeholder="Company / Owner" />
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none" placeholder="Email" />
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none md:col-span-2" placeholder="IP Title" />
          <textarea className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none md:col-span-2 min-h-[120px]" placeholder="Short Description (placeholder)" />
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10 md:col-span-2">
            Submit (UI only)
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        <ul className="space-y-2 list-disc list-inside">
          <li>Verification: placeholder</li>
          <li>NDA: placeholder</li>
          <li>Fees/Commission: placeholder</li>
        </ul>
      </section>
    </div>
  )
}
