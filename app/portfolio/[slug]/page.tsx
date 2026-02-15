import Link from 'next/link'
import { notFound } from 'next/navigation'
import { IP_LIST } from '../_data'

export const dynamicParams = false

export function generateStaticParams() {
  return IP_LIST.map((x) => ({ slug: x.slug }))
}

export default function PortfolioDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const ip = IP_LIST.find((x) => x.slug === params.slug)
  if (!ip) return notFound()

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-24">
      <Link href="/portfolio" className="text-neutral-500 text-sm">
        ← Back
      </Link>

      <h1 className="mt-6 text-4xl font-semibold">{ip.title}</h1>
      <p className="mt-4 text-neutral-400">{ip.oneLiner}</p>

      <div className="mt-10 space-y-4">
        <div>
          <div className="text-neutral-500 text-sm">Buyer Fit</div>
          <div className="mt-2 text-neutral-300">{ip.buyerFit.join(', ')}</div>
        </div>

        <div>
          <div className="text-neutral-500 text-sm">Value Signals</div>
          <div className="mt-2 text-neutral-300">{ip.valueSignals.join(', ')}</div>
        </div>

        <div>
          <div className="text-neutral-500 text-sm">Disclosure</div>
          <div className="mt-2 text-neutral-300">{ip.disclosureNote}</div>
        </div>
      </div>
    </main>
  )
}
