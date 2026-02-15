// app/browse/page.tsx
import Link from 'next/link'
import { IP_LIST } from '@/app/data/ip-list'

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
     
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold">Browse IP Listings</h1>
            <p className="text-sm text-white/60 mt-1">
              Enterprise-style listings for licensing, transfer, and strategic integration.
            </p>
          </div>

          <div className="w-full max-w-md">
            <input
              placeholder="Search by keyword, code, or industry (UI only)"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* LEFT FILTER (UI ONLY) */}
          <aside className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium">Filters</div>

              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="text-white/70 mb-2">Industry</div>
                  <div className="space-y-2 text-white/60">
                    {['Platform', 'Retail', 'Finance', 'Distribution', 'Franchise', 'Data'].map((x) => (
                      <label key={x} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-white/80" />
                        <span>{x}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-white/70 mb-2">Status</div>
                  <div className="space-y-2 text-white/60">
                    {['Filed', 'Pending', 'Granted'].map((x) => (
                      <label key={x} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-white/80" />
                        <span>{x}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-white/70 mb-2">Deal Type</div>
                  <div className="space-y-2 text-white/60">
                    {['License', 'Exclusive License', 'Full Transfer'].map((x) => (
                      <label key={x} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-white/80" />
                        <span>{x}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full rounded-xl border border-white/10 bg-white/5 py-2 text-sm text-white/70 hover:bg-white/10">
                  Apply (UI only)
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT LIST */}
          <section className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-12 gap-0 bg-white/5 px-4 py-3 text-xs text-white/60">
                <div className="col-span-2">Code</div>
                <div className="col-span-5">Title</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Deal</div>
                <div className="col-span-1 text-right">Ready</div>
              </div>

              <div className="divide-y divide-white/10">
                {IP_LIST.map((ip) => (
                  <Link
                    key={ip.slug}
                    href={`/ip/${ip.slug}`}
                    className="block hover:bg-white/5"
                  >
                    <div className="grid grid-cols-12 gap-0 px-4 py-4">
                      <div className="col-span-2 text-sm text-white/80">{ip.code}</div>

                      <div className="col-span-5">
                        <div className="text-sm font-medium text-white/90">{ip.title}</div>
                        <div className="text-xs text-white/60 mt-1 line-clamp-1">
                          {ip.summary}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {ip.industries.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-2">
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                          {ip.status}
                        </span>
                      </div>

                      <div className="col-span-2 text-xs text-white/70">
                        {ip.dealType[0]}
                      </div>

                      <div className="col-span-1 text-right text-xs text-white/70">
                        {ip.readiness}/5
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs text-white/50">
              Showing {IP_LIST.length} listings • Updated values are placeholders for layout only.
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
