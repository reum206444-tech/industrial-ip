// app/industries/page.tsx
import Link from 'next/link'

const INDUSTRIES = ['Platform', 'Retail', 'Finance', 'Distribution', 'Healthcare', 'Manufacturing', 'Franchise', 'Data']

export default function IndustriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Industries</h1>
        <p className="mt-2 text-sm text-white/60">Browse categories in a standard marketplace format (UI-first).</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {INDUSTRIES.map((x) => (
          <Link
            key={x}
            href="/browse"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          >
            <div className="text-sm font-medium">{x}</div>
            <div className="mt-2 text-xs text-white/60">View related listings →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
