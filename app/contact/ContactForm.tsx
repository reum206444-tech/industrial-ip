// app/contact/ContactForm.tsx
'use client'

import { useMemo, useState } from 'react'

export default function ContactForm({ presetIP = '' }: { presetIP?: string }) {
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [ipInterest, setIpInterest] = useState(presetIP)
  const [message, setMessage] = useState('')

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `[Industrial IP] Inquiry ${ipInterest ? `(${ipInterest})` : ''}`
    )

    const body = encodeURIComponent(
      `Company: ${company}
Email: ${email}

Interested IP: ${ipInterest}

Deal Type:
Target Region:
Timeline:

Message:
${message}
`
    )

    return `mailto:Reum206444@gmail.com?subject=${subject}&body=${body}`
  }, [company, email, ipInterest, message])

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Contact</h1>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          NDA-first inquiry. Minimal info only — details after NDA.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-200 md:col-span-2"
            placeholder="Interested IP Code / Keyword"
            value={ipInterest}
            onChange={(e) => setIpInterest(e.target.value)}
          />

          <textarea
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-200 md:col-span-2 min-h-[160px]"
            placeholder="Message (deal type, timeline, NDA contact)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition md:col-span-2"
          >
            Send Email
          </a>

          <div className="md:col-span-2 text-xs text-slate-500 leading-relaxed">
            Tip: include your legal entity name and signer email for faster NDA processing.
          </div>
        </div>
      </section>
    </div>
  )
}