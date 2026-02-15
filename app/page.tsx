// app/page.tsx
import Link from 'next/link'
import { IP_LIST } from './data/ip-list'

export default function HomePage() {
  const featured = IP_LIST.slice(0, 6)

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
        <div className="text-xs text-slate-500 tracking-widest">
          ENTERPRISE IP MARKETPLACE
        </div>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Buy, License, or Transfer Industrial IP
        </h1>

        <p className="mt-4 text-base text-slate-600 max-w-2xl leading-relaxed">
          Curated structural IP listings with clear deal pathways. Request NDA access, evaluate risk,
          and move to transfer or licensing with a standardized flow.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          {/* Primary */}
          <Link
            href="/browse"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            Browse Listings
          </Link>

          {/* Secondary */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            Request Info (NDA)
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            Standardized deal types & status
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            Risk checks & evidence-ready materials
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            NDA-first disclosure for sensitive IP
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Featured Listings</h2>
            <p className="mt-1 text-sm text-slate-600">
              A short set of active listings. New IP is added gradually.
            </p>
          </div>

          <Link href="/browse" className="text-sm text-slate-600 hover:text-slate-900">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((ip) => (
            <Link
              key={ip.slug}
              href={`/ip/${ip.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="text-xs text-slate-500">{ip.code}</div>
              <div className="mt-1 text-base font-semibold text-slate-900">{ip.title}</div>
              <div className="mt-2 text-sm text-slate-600 line-clamp-2">{ip.summary}</div>

              <div className="mt-4 flex gap-2 flex-wrap">
                {ip.industries.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Industry */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Browse by Industry</h3>
            <p className="mt-1 text-sm text-slate-600">
              Quick entry points for common categories.
            </p>
          </div>

          <Link href="/industries" className="text-sm text-slate-600 hover:text-slate-900">
            Explore →
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {['Platform', 'Retail', 'Finance', 'Distribution', 'Franchise', 'Data'].map((x) => (
            <Link
              key={x}
              href="/browse"
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 hover:bg-slate-100 transition"
            >
              {x}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}