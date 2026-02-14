// app/structure/page.tsx
import Link from 'next/link';

export default function StructurePage() {
  const steps = [
    {
      title: '01. Market Mapping',
      desc: '산업의 규칙(유통/정산/유입/락인)을 분해하고, 이해관계자·흐름·마찰점을 구조로 고정합니다.',
      bullets: ['Stakeholder map', 'Value chain & incentives', 'Friction / leverage points'],
    },
    {
      title: '02. Structural Modeling',
      desc: '진입·확산·귀속·통제의 핵심 메커니즘을 모델로 설계합니다. “작동 가능한 구조”만 남깁니다.',
      bullets: ['Entry & lock mechanism', 'Attribution / settlement logic', 'Replication constraints'],
    },
    {
      title: '03. IP Modularization',
      desc: '구조를 거래 가능한 단위로 모듈화합니다. 독점/라이선스/지역계약에 맞게 권리 경계를 설계합니다.',
      bullets: ['Claimable modules', 'Boundary definition', 'Portfolio packaging'],
    },
    {
      title: '04. Deployment Strategy',
      desc: '기업 전략과 연결합니다. 도입 난이도/리드타임/리스크를 표준화해 의사결정을 빠르게 만듭니다.',
      bullets: ['Integration options', 'Risk controls', 'Rollout plan'],
    },
  ];

  const control = [
    {
      title: 'Exclusivity Design',
      desc: '독점이 “의도”가 아니라 “구조”로 작동하도록 설계합니다.',
    },
    {
      title: 'Anti-Replication Layer',
      desc: '복제·우회·대체 시나리오를 가정하고, 핵심 포인트에 방어 계층을 둡니다.',
    },
    {
      title: 'Deal-Ready Packaging',
      desc: '검토 → 협상 → 계약 → 적용까지의 흐름에 맞춰 문서/모듈/범위를 패키징합니다.',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-sm tracking-widest text-white/70">INDUSTRIAL IP</div>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-white/70 hover:text-white">
              Home
            </Link>
            <Link href="/portfolio" className="text-white/70 hover:text-white">
              Portfolio
            </Link>
            <Link href="/deal" className="text-white/70 hover:text-white">
              Deal
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="text-sm tracking-widest text-white/50">STRUCTURE FRAMEWORK</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          우리는 기술이 아니라
          <br />
          시장 진입 구조를 설계합니다.
        </h1>

        <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
          플랫폼 · 유통 · 프랜차이즈 · 금융 기업이 바로 의사결정할 수 있도록,
          구조를 모듈로 분해하고 권리 경계를 설정한 뒤 거래 가능한 형태로 패키징합니다.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
          >
            검토 요청
          </Link>
          <Link
            href="/deal"
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white hover:border-white/40"
          >
            거래 구조 보기
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/60 hover:text-white hover:border-white/30"
          >
            포트폴리오 보기
          </Link>
        </div>
      </section>

      {/* Framework */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold">Framework</h2>
            <p className="text-sm text-white/55 max-w-2xl">
              “설명”이 아니라 “작동”을 기준으로 설계합니다. 단계별 산출물은 딜 검토 흐름에 맞춰 구성됩니다.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.title}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{s.desc}</div>
                <ul className="mt-5 space-y-2 text-sm text-white/60">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Layer */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Control Layer</h2>
          <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
            경쟁사/대체재/우회 시나리오를 전제로 방어 계층을 설계합니다.
            구조의 핵심은 “귀속·통제·정산”이므로, 계약/운영/기술 레이어를 분리해 리스크를 줄입니다.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {control.map((c) => (
              <div
                key={c.title}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Engagement Model</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <div className="text-lg font-semibold">Standard Review</div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                구조 적합성 검토 → 모듈 범위 확정 → 거래 형태(양도/독점/지역) 매칭.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/60">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>검토 범위/기간 정의</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>모듈 단위 패키징</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>딜 조건 프레임 제공</span>
                </li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <div className="text-lg font-semibold">Confidential Track</div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                NDA 기반 비공개 자료 제공 및 심층 협의 트랙. 기업 내부 의사결정에 맞춰 자료를 구조화합니다.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/60">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>비공개 패키지/딜룸 연계</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>리스크/경쟁 시나리오 대응</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>통합/도입 전략 제안</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              검토 요청하기
            </Link>
            <Link
              href="/deal"
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/40"
            >
              거래 옵션 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/50">
          © {new Date().getFullYear()} INDUSTRIAL IP — Structure-led strategic IP design group.
        </div>
      </footer>
    </main>
  );
}
