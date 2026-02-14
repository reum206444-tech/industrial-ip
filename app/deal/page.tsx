// app/deal/page.tsx
import Link from 'next/link';

type DealOption = {
  title: string;
  badge: string;
  desc: string;
  bullets: string[];
};

export default function DealPage() {
  const options: DealOption[] = [
    {
      title: 'IP Transfer',
      badge: 'Full Assignment',
      desc: '권리의 전면 이전. 기업 내 자산화가 필요한 경우에 적합합니다.',
      bullets: ['범위/권리 경계 확정', '이전 조건 및 예외 정의', '후속 모듈 확장 옵션'],
    },
    {
      title: 'Exclusive License',
      badge: 'Exclusivity',
      desc: '산업/지역/채널 단위 독점 라이선스. 확장성과 통제력을 동시에 확보합니다.',
      bullets: ['독점 범위(산업/지역) 설정', '기간/갱신/해지 조건', '경쟁·중복 계약 방지 조항'],
    },
    {
      title: 'Strategic Integration',
      badge: 'Build-to-Integrate',
      desc: '기업 전략과 결합해 구조를 내재화하는 통합 모델. 단계적 권리 이전도 가능합니다.',
      bullets: ['통합 범위(프로세스/운영) 정의', '단계별 산출물/검증', '계약형 구조로 권리 이동'],
    },
  ];

  const process = [
    {
      title: '01. Screening',
      desc: '적합성 검토 및 범위 합의. 과도한 커스터마이징을 막고, 핵심 모듈만 남깁니다.',
      bullets: ['요청 목적/도입 환경', '검토 범위/기간 합의', '거래 형태 매칭'],
    },
    {
      title: '02. NDA & Package',
      desc: '비공개 트랙에서 패키지를 제공합니다. 딜 검토에 필요한 수준으로만 공개합니다.',
      bullets: ['NDA 체결(선택)', '모듈 패키지 제시', '리스크/경쟁 시나리오 공유'],
    },
    {
      title: '03. Term Structuring',
      desc: '조건을 문서로 고정합니다. 범위·독점·예외·확장 옵션을 명확히 설계합니다.',
      bullets: ['권리 범위 정의', '독점/지역/기간', '확장/옵션/예외'],
    },
    {
      title: '04. Close & Deploy',
      desc: '계약 체결 후 적용 전략을 제공합니다. 도입 리스크를 통제하며 실행합니다.',
      bullets: ['계약 체결', '도입/통합 플랜', '성과 기준/검증'],
    },
  ];

  const controls = [
    {
      title: 'Anti-Overlap',
      desc: '중복 계약 리스크를 줄이기 위해 권리 경계를 모듈 단위로 분리합니다.',
    },
    {
      title: 'Competitive Scenarios',
      desc: '경쟁사·대체재·우회 시나리오를 전제로 방어 계층을 설계합니다.',
    },
    {
      title: 'Deal-Ready Documentation',
      desc: '검토·협상·사내 결재에 맞춘 문서 구조로 제공해 의사결정 비용을 낮춥니다.',
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
            <Link href="/structure" className="text-white/70 hover:text-white">
              Structure
            </Link>
            <Link href="/portfolio" className="text-white/70 hover:text-white">
              Portfolio
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="text-sm tracking-widest text-white/50">DEAL STRUCTURE</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          IP는 거래 가능한
          <br />
          전략 자산입니다.
        </h1>
        <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
          거래는 “설명”이 아니라 “범위·독점·통제”의 문서화로 완성됩니다.
          기업의 도입 환경과 의사결정 구조에 맞춰, 모듈 단위로 조건을 설계합니다.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Deal Options */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold">Deal Options</h2>
            <p className="text-sm text-white/55 max-w-2xl">
              상황에 맞는 거래 형태를 선택한 뒤, 권리 경계와 독점 범위를 문서로 고정합니다.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {options.map((o) => (
              <div
                key={o.title}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-semibold">{o.title}</div>
                  <div className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70">
                    {o.badge}
                  </div>
                </div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{o.desc}</div>
                <ul className="mt-5 space-y-2 text-sm text-white/60">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link href="/contact" className="text-sm text-white/70 hover:text-white">
                    조건 검토 요청 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Review Process</h2>
          <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
            기업 내부 검토(전략/법무/사업) 흐름에 맞춰 단계별 산출물을 제공합니다.
            공개 범위는 최소화하고, 의사결정에 필요한 정보만 제공합니다.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {process.map((p) => (
              <div
                key={p.title}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold">{p.title}</div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{p.desc}</div>
                <ul className="mt-5 space-y-2 text-sm text-white/60">
                  {p.bullets.map((b) => (
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

      {/* Control & Risk */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Control & Risk</h2>
          <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
            거래에서 가장 큰 리스크는 모호함입니다. 권리 경계, 독점 범위, 예외 조건을 선명하게 고정해
            중복 계약과 경쟁 리스크를 통제합니다.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {controls.map((c) => (
              <div
                key={c.title}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              검토 요청하기
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/40"
            >
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/50">
          © {new Date().getFullYear()} INDUSTRIAL IP — Deal structure for strategic IP.
        </div>
      </footer>
    </main>
  );
}
