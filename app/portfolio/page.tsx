import Link from 'next/link'
import { IP_LIST } from './_data'

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2.5 py-1 border border-neutral-800 text-neutral-300">
      {children}
    </span>
  )
}

function ScorePips({ score }: { score: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={[
            'h-1.5 w-8 border',
            i < score ? 'border-neutral-200' : 'border-neutral-800',
          ].join(' ')}
        />
      ))}
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-10">
        <h1 className="text-4xl font-semibold">Deal-ready IP Catalog</h1>
        <p className="mt-4 text-neutral-400">
          Enterprise Access Only. Detailed structural documentation available under NDA only.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-2 gap-6">
        {IP_LIST.map((ip) => (
          <Link
            key={ip.slug}
            href={`/portfolio/${ip.slug}`}
            className="border border-neutral-800 p-7 hover:bg-neutral-900/40 transition block"
          >
            <div className="text-xs text-neutral-500">{ip.codename}</div>
            <div className="mt-2 text-xl font-semibold">{ip.title}</div>
            <p className="mt-4 text-sm text-neutral-400">{ip.oneLiner}</p>

            <div className="mt-4">
              <ScorePips score={ip.dealReady} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{ip.status}</Badge>
              <Badge>Exclusivity: {ip.exclusivity}</Badge>
            </div>

            <div className="mt-6 text-sm text-neutral-300">View teaser →</div>
          </Link>
        ))}
      </section>
    </main>
  )
}
