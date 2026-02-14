// app/portfolio/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

type IPStatus = 'Concept' | 'Filed' | 'Pending' | 'Granted';
type DealType = 'Transfer' | 'Exclusive License' | 'Regional' | 'Integration';
type Domain = 'Platform' | 'Franchise' | 'Finance' | 'Distribution';

type IPItem = {
  slug: string;
  codename: string;
  title: string;
  status: IPStatus;
  domain: Domain[];
  dealTypes: DealType[];
  exclusivity: 'Yes' | 'No' | 'Conditional';
  dealReady: 1 | 2 | 3 | 4 | 5;
  oneLiner: string;

  // Teaser fields only
  buyerFit: string[];
  valueSignals: string[];
  deliverablesTeaser: string[];
  disclosureNote: string;
};

const IP_LIST: IPItem[] = [
  {
    slug: 'locked-entry-attribution',
    codename: 'IP-01',
    title: 'Locked Entry & Mandatory Attribution Layer',
    status: 'Pending',
    domain: ['Platform', 'Distribution'],
    dealTypes: ['Exclusive License', 'Integration'],
    exclusivity: 'Yes',
    dealReady: 4,
    oneLiner: '유입 경로 귀속을 구조로 고정해 전환·정산·확산의 통제력을 확보합니다.',
    buyerFit: ['대형 플랫폼', '유통/커머스', '결제/포인트 생태계'],
    valueSignals: ['유입 귀속 고정', '정산/인센티브 구조화', '확산 루프 설계'],
    deliverablesTeaser: ['모듈 범위 정의서(Teaser)', '거래 형태 매칭(Transfer/License)', 'NDA 후 상세 패키지 제공'],
    disclosureNote: '구체 메커니즘(흐름·도면·청구항 구조)은 NDA 트랙에서만 제공합니다.',
  },
  {
    slug: 'closed-o2o-secret-mall',
    codename: 'IP-02',
    title: 'Closed O2O Commerce Loop (Secret Access Model)',
    status: 'Filed',
    domain: ['Platform', 'Franchise', 'Distribution'],
    dealTypes: ['Transfer', 'Exclusive License', 'Regional'],
    exclusivity: 'Conditional',
    dealReady: 4,
    oneLiner: '폐쇄형 진입과 확산 구조로 최저가·락인을 동시에 설계합니다.',
    buyerFit: ['프랜차이즈 본부', '오프라인 네트워크 보유 기업', '유통/제휴 사업자'],
    valueSignals: ['폐쇄형 진입', 'O2O 순환', '지역/채널 계약 적합'],
    deliverablesTeaser: ['적용 시나리오(산업별)', '권리 경계 초안', 'NDA 후 도면/명세서 패키지'],
    disclosureNote: '구체적인 진입/확산 로직과 방어 레이어는 비공개입니다.',
  },
  {
    slug: 'auto-settlement-revenue-split',
    codename: 'IP-03',
    title: 'Automated Settlement & Revenue-Split Control',
    status: 'Pending',
    domain: ['Distribution', 'Finance'],
    dealTypes: ['Integration', 'Regional'],
    exclusivity: 'Yes',
    dealReady: 3,
    oneLiner: '정산 규칙을 시스템 레벨로 고정해 파트너 확장 시 리스크를 줄입니다.',
    buyerFit: ['카드사/결제사', '유통/정산 플랫폼', '파트너 네트워크 비즈니스'],
    valueSignals: ['정산 자동화', '수익분배 규칙 고정', '파트너 확장 리스크 감소'],
    deliverablesTeaser: ['정산 구조 개요', '도입 범위 스코핑', 'NDA 후 상세 설계 제공'],
    disclosureNote: '정산 알고리즘/규칙 상세는 NDA 후 공개합니다.',
  },
  {
    slug: 'behavior-to-asset-scoring',
    codename: 'IP-04',
    title: 'Behavior-to-Asset Scoring Engine',
    status: 'Concept',
    domain: ['Platform', 'Finance'],
    dealTypes: ['Exclusive License', 'Integration'],
    exclusivity: 'Conditional',
    dealReady: 2,
    oneLiner: '회원 행동을 자산 점수로 변환해 혜택·권리·구매 유도에 연결합니다.',
    buyerFit: ['멤버십/포인트 사업자', '플랫폼', '금융/리워드'],
    valueSignals: ['행동→점수 변환', '혜택/권리 연결', '성과 기준 설계'],
    deliverablesTeaser: ['컨셉 모델(Teaser)', '도입 적합성 체크', '출원/패키징 로드맵(비공개 트랙)'],
    disclosureNote: '수식/스코어링 방식은 비공개입니다.',
  },
  {
    slug: 'event-to-o2o-conversion',
    codename: 'IP-05',
    title: 'Event-to-O2O Conversion Pipeline',
    status: 'Filed',
    domain: ['Platform', 'Franchise'],
    dealTypes: ['Regional', 'Integration'],
    exclusivity: 'Yes',
    dealReady: 3,
    oneLiner: '오프라인 이벤트 참여를 즉시 구매 전환으로 연결하는 구조를 제공합니다.',
    buyerFit: ['브랜드 행사 운영사', '프랜차이즈', '플랫폼 마케팅 조직'],
    valueSignals: ['참여→전환 파이프라인', '데이터 귀속', '확산 루프'],
    deliverablesTeaser: ['전환 퍼널 구조 개요', '적용 시나리오', 'NDA 후 상세 패키지'],
    disclosureNote: '행사-전환 연결 메커니즘 세부는 비공개입니다.',
  },
];

export default function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const ip = IP_LIST.find((x) => x.slug === params.slug);
  if (!ip) return notFound();

  return (
    <main className="min-h-screen bg-black text-white">
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

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <Link href="/portfolio" className="text-sm text-white/60 hover:text-white">
          ← 포트폴리오로
        </Link>

        <div className="mt-6 flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs tracking-widest text-white/50">{ip.codename}</div>
            <h1 className="mt-2 text-4xl font-semibold leading-tight">{ip.title}</h1>
            <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">{ip.oneLiner}</p>
          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-white/5 min-w-[240px]">
            <div className="text-sm text-white/60">Status</div>
            <div className="mt-1 text-lg font-semibold">{ip.status}</div>

            <div className="mt-4 text-sm text-white/60">Deal-ready</div>
            <div className="mt-1 text-lg font-semibold">{ip.dealReady}/5</div>

            <div className="mt-4 text-sm text-white/60">Exclusivity</div>
            <div className="mt-1 text-lg font-semibold">{ip.exclusivity}</div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <div className="text-lg font-semibold">Target Buyer Fit</div>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {ip.buyerFit.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <div className="text-lg font-semibold">Value Signals</div>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {ip.valueSignals.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <div className="text-lg font-semibold">Deal Types</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {ip.dealTypes.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 text-lg font-semibold">Domains</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {ip.domain.map((d) => (
                <span
                  key={d}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <div className="text-lg font-semibold">Deliverables (Teaser)</div>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {ip.deliverablesTeaser.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <div className="text-lg font-semibold">Disclosure Policy</div>
            <p className="mt-3 text-sm text-white/65 leading-relaxed">{ip.disclosureNote}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              NDA 기반 상세 검토 요청
            </Link>
            <Link
              href="/deal"
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/40"
            >
              거래 구조 보기
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/50">
          © {new Date().getFullYear()} INDUSTRIAL IP — Portfolio teaser detail.
        </div>
      </footer>
    </main>
  );
}
