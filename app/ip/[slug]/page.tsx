// app/ip/[slug]/page.tsx
import { IP_LIST } from '@/app/data/ip-list'

export default function IPDetailPage({ params }: { params: { slug: string } }) {
  const ip = IP_LIST.find((x) => x.slug === params.slug)
  if (!ip) return <div className="py-16 text-slate-600">Not Found</div>

  const mailtoHref = `mailto:Reum206444@gmail.com?subject=${encodeURIComponent(
    `[Industrial IP] Inquiry - ${ip.code}`
  )}&body=${encodeURIComponent(
    `Company:
Email:
Phone:

Interested IP: ${ip.code}
IP Title: ${ip.title}

Deal Type (Transfer / License / Exclusive / Regional):
Target Region:
Timeline:

Message:
`
  )}`

  return (
    <div className="space-y-10">
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">

          {/* Left */}
          <div className="w-full max-w-3xl">
            <div className="text-xs text-slate-500">{ip.code}</div>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              {ip.title}
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {ip.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {ip.industries.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <aside className="w-full lg:max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Listing Summary</div>

            <div className="mt-4 space-y-3 text-sm">
              <Row label="Status" value={ip.status} />
              <Row label="Region" value={ip.region.join(', ')} />
              <Row label="Deal Type" value={ip.dealType.join(' / ')} />
              <Row label="Exclusivity" value={ip.exclusivity} />
              <Row label="Deal Readiness" value={`${ip.readiness}/5`} />
              <Row label="Updated" value={ip.updatedAt} />
            </div>

            <a
              href={mailtoHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
            >
              Request Info (NDA)
            </a>

            <div className="mt-4 text-xs text-slate-500">
              Sensitive details can be disclosed after NDA.
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <a href="/browse" className="text-sm text-slate-600 hover:text-slate-900">
            ← Back to Browse
          </a>
        </div>
      </main>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-slate-500">{label}</div>
      <div className="text-slate-900 font-medium text-right">{value}</div>
    </div>
  )
}