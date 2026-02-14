// app/portfolio/page.tsx
import Link from 'next/link';

type IPStatus = 'Concept' | 'Filed' | 'Pending' | 'Granted';
type DealType = 'Transfer' | 'Exclusive License' | 'Regional' | 'Integration';
type Domain = 'Platform' | 'Franchise' | 'Finance' | 'Distribution';

type IPItem = {
  slug: string;
  codename: string;
  title: string; // 공개용 제목(구체 메커니즘은 숨김)
  domain: Domain[];
  dealTypes: DealType[];
  status: IPStatus;
  exclusivity: 'Yes' | 'No' | 'Conditional';
  dealReady: 1 | 2 | 3 | 4 | 5;
  oneLiner: string;
};

const IP_LIST: IPItem[] = [
  {
    slug: 'locked-entry-attribution',
    codename: 'IP-01',
    title: 'Locked Entry & Mandatory Attribution Layer',
    domain: ['Platform', 'Distribution'],
    dealTypes: ['Exclusive License', 'Integration'],
    status: 'Pending',
    exclusivity: 'Yes',
    dealReady: 4,
    oneLiner: '유입 경로 귀속을 구조로 고정해 전환·정산·확산의 통제력을 확보합니다.',
  },
  {
    slug: 'closed-o2o-secret-mall',
    codename: 'IP-02',
    title: 'Closed O2O Commerce Loop (Secret Access Model)',
    domain: ['Platform', 'Franchise', 'Distribution'],
    dealTypes: ['Transfer', 'Exclusive License', 'Regional'],
    status: 'Filed',
    exclusivity: 'Conditional',
    dealReady: 4,
    oneLiner: '폐쇄형 진입과 확산 구조로 최저가·락인을 동시에 설계합니다.',
  },
  {
    slug: 'auto-settlement-revenue-split',
    codename: 'IP-03',
    title: 'Automated Settlement & Revenue-Split Control',
    domain: ['Distribution', 'Finance'],
    dealTypes: ['Integration', 'Regional'],
    status: 'Pending',
    exclusivity: 'Yes',
    dealReady: 3,
    oneLiner: '정산 규칙을 시스템 레벨로 고정해 파트너 확장 시 리스크를 줄입니다.',
  },
  {
    slug: 'behavior-to-asset-scoring',
    codename: 'IP-04',
    title: 'Behavior-to-Asset Scoring Engine',
    domain: ['Platform', 'Finance'],
    dealTypes: ['Exclusive License', 'Integration'],
    status: 'Concept',
    exclusivity: 'Conditional',
    dealReady: 2,
    oneLiner: '회원 행동을 자산 점수로 변환해 혜택·권리·구매 유도에 연결합니다.',
  },
  {
    slug: 'event-to-o2o-conversion',
    codename: 'IP-05',
    title: 'Event-to-O2O Conversion Pipeline',
    domain: ['Platform', 'Franchise'],
    dealTypes: ['Regional', 'Integration'],
    status: 'Filed',
    exclusivity: 'Yes',
    dealReady: 3,
    oneLiner: '오프라인 이벤트 참여를 즉시 구매 전환으로 연결하는 구조를 제공합니다.',
  },
];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function PortfolioPage() {
  const domains = uniq(IP_LIST.flatMap((x) => x.domain));
  const statuses = uniq(IP_LIST.map((x) => x.status));
  const deals = uniq(IP_LIST.flatMap((x) => x.dealTypes));

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
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <p className="text-sm tracking-widest text-white/50">IP PORTFOLIO</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          Deal-ready IP Catalog
        </h1>
        <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
          공개 범위는 “티저(Teaser)” 수준으로 제한합니다. 상세 구조·도면·청구항 패키지는 NDA 트랙에서 제공합니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
          >
            NDA 기반 상세 검토 요청
          </Link>
          <Link
            href="/deal"
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white hover:border-white/40"
          >
            거래 옵션 보기
          </Link>
        </div>
      </section>

      {/* Filters (static display for now) */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
              <div className="text-sm text-white/60">Domains</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {domains.map((d) => (
                  <span
                    key={d}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
              <div className="text-sm text-white/60">Status</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {statuses.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
              <div className="text-sm text-white/60">Deal Types</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {deals.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {IP_LIST.map((ip) => (
              <Link
                key={ip.slug}
                href={`/portfolio/${ip.slug}`}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs tracking-widest text-white/50">{ip.codename}</div>
                    <div className="mt-2 text-lg font-semibold">{ip.title}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-white/60">Deal-ready</div>
                    <div className="mt-1 text-sm font-semibold">
                      {ip.dealReady}/5
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {ip.oneLiner}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70">
                    {ip.status}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70">
                    Exclusivity: {ip.exclusivity}
                  </span>
                  {ip.domain.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm text-white/70">
                  상세 보기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/50">
          © {new Date().getFullYear()} INDUSTRIAL IP — IP portfolio teaser catalog.
        </div>
      </footer>
    </main>
  );
}
