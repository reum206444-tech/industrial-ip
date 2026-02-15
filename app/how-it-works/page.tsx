// app/how-it-works/page.tsx
export default function HowItWorksPage() {
  const buyer = ['Browse listings', 'Request information', 'Execute NDA', 'Due diligence', 'Close deal']
  const seller = ['Submit IP', 'Verification', 'Listing', 'Buyer introductions', 'Transaction']

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">How It Works</h1>
        <p className="mt-2 text-sm text-white/60">Standard marketplace flow (placeholders; details later).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-base font-medium">For Buyers</h2>
          <ol className="mt-4 space-y-2 text-sm text-white/70 list-decimal list-inside">
            {buyer.map((x) => <li key={x}>{x}</li>)}
          </ol>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-base font-medium">For Sellers</h2>
          <ol className="mt-4 space-y-2 text-sm text-white/70 list-decimal list-inside">
            {seller.map((x) => <li key={x}>{x}</li>)}
          </ol>
        </section>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-base font-medium">FAQ</h2>
        <div className="mt-4 space-y-3 text-sm text-white/70">
          <div className="border border-white/10 rounded-xl p-4 bg-white/5">Q. Is NDA required? A. Yes (placeholder policy).</div>
          <div className="border border-white/10 rounded-xl p-4 bg-white/5">Q. Are listings verified? A. Verification process will be defined.</div>
          <div className="border border-white/10 rounded-xl p-4 bg-white/5">Q. Can I request exclusivity? A. Depends on listing terms.</div>
        </div>
      </section>
    </div>
  )
}
