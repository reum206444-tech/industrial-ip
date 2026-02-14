'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      {/* NAV */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-sm tracking-widest text-white/70">
            INDUSTRIAL IP
          </div>

          <nav className="flex gap-6 text-sm">
            <Link href="/structure" className="hover:text-white text-white/70">
              Structure
            </Link>
            <Link href="/deal" className="hover:text-white text-white/70">
              Deal
            </Link>
            <Link href="/contact" className="hover:text-white text-white/70">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-24 mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-white/50">
            STRUCTURE-LED STRATEGIC IP
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight">
            기업 전략에 직접 연결되는
            <br />
            산업 구조 기반 IP 설계 그룹
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            플랫폼 · 유통 · 프랜차이즈 산업을 위한
            <br />
            구조 설계 및 독점형 IP 전략을 제공합니다.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
            >
              검토 요청
            </Link>

            <Link
              href="/structure"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white hover:border-white/40"
            >
              설계 프레임워크 보기
            </Link>

            <a
              href="#deal"
              className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/60 hover:text-white hover:border-white/30"
            >
              거래 구조
            </a>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section id="focus" className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-12">핵심 설계 영역</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Industrial Thesis', desc: '기술이 아니라 “시장 진입 구조”를 설계합니다.' },
              { title: 'Structure Framework', desc: '모듈화 → IP화 → 기업 전략 연결까지의 표준 프로세스.' },
              { title: 'Portfolio', desc: '재현 가능한 구조 단위로 패키징된 IP 포트폴리오.' },
            ].map((x) => (
              <div
                key={x.title}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold">{x.title}</div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{x.desc}</div>

                <div className="mt-6">
                  {x.title === 'Portfolio' ? (
                    <Link className="text-sm text-white/70 hover:text-white" href="/portfolio">
                      자세히 보기 →
                    </Link>
                  ) : x.title === 'Structure Framework' ? (
                    <Link className="text-sm text-white/70 hover:text-white" href="/structure">
                      자세히 보기 →
                    </Link>
                  ) : (
                    <a className="text-sm text-white/70 hover:text-white" href="#deal">
                      자세히 보기 →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEAL */}
      <section id="deal" className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-12">거래 구조</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {['IP 양도', '독점 라이선스', '지역 기반 계약', '전략적 통합 모델'].map((deal) => (
              <div
                key={deal}
                className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="font-semibold">{deal}</div>
                <div className="mt-3 text-sm text-white/65">
                  검토 범위/기간/독점 조건에 따라 구조를 맞춤 설계합니다.
                </div>

                <Link
                  className="inline-block mt-6 text-sm text-white/70 hover:text-white"
                  href="/contact"
                >
                  검토 요청 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-6">전략 문의</h2>

          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition inline-block"
          >
            검토 요청 페이지로 이동
          </Link>
        </div>
      </section>
    </main>
  );
}
