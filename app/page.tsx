'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">

      {/* NAV */}
      <header className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur border-b border-neutral-800 z-50">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="text-sm tracking-widest text-neutral-400">
            ENTERPRISE STRUCTURAL IP
          </div>

          <nav className="flex gap-8 text-sm text-neutral-400">
  <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
  <Link href="/structure" className="hover:text-white">Structure</Link>
  <Link href="/deal" className="hover:text-white">Deal</Link>
  <Link href="/contact" className="hover:text-white">Contact</Link>
</nav>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-32 mx-auto max-w-7xl px-6">
        <div className="mt-12 flex flex-col md:flex-row gap-4">
  <Link
    href="/portfolio"
    className="px-8 py-3 border border-neutral-700 hover:border-white transition"
  >
    IP 포트폴리오 보기
  </Link>

  <Link
    href="/contact"
    className="px-8 py-3 text-neutral-400 hover:text-white transition"
  >
    기업 검토 요청
  </Link>
</div>

      </section>

      {/* CORE SERVICES */}
      <section className="py-32 border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold mb-20">
            Enterprise Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                title: 'Structural Audit',
                desc: '사업 구조 진단 및 리스크 분석'
              },
              {
                title: 'IP Acquisition',
                desc: '독점형 구조 IP 도입'
              },
              {
                title: 'Expansion Architecture',
                desc: '신규 매출 구조 설계'
              }
            ].map((item) => (
              <div key={item.title} className="border-t border-neutral-800 pt-6">
                <div className="text-xl font-medium">{item.title}</div>
                <div className="mt-4 text-neutral-400">{item.desc}</div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 text-sm text-neutral-500">
          Enterprise Access Only.
          <br />
          Detailed structural documentation available under NDA only.
        </div>
      </footer>

    </main>
  )
}
