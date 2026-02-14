export default function Home() {
  const cards = [
    {
      title: "산업 구조 설계",
      desc: "플랫폼/프랜차이즈/금융·유통에 적용 가능한 구조를 모듈로 설계합니다.",
    },
    {
      title: "IP 포트폴리오",
      desc: "출원/준비/협상 가능 단계별로 정리된 구조형 IP 자산을 보유·관리합니다.",
    },
    {
      title: "거래 지원",
      desc: "라이선스/양도/제휴 협의 시 필요한 자료 구조화 및 프로세스를 지원합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP NAV */}
      <header className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
        <div className="text-sm tracking-widest text-white/70">
          INDUSTRIAL IP
        </div>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

        <nav className="flex gap-3 text-sm">
  <a className="text-white/70 hover:text-white" href="#focus">설계영역</a>
  <a className="text-white/70 hover:text-white" href="#deal">거래구조</a>
  <a className="text-white/70 hover:text-white" href="#contact">문의</a>
</nav>

      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-14">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold leading-tight">
            산업 구조 설계 기반
            <br />
            전략 IP 그룹
          </h1>

          <p className="text-white/70 max-w-2xl">
            플랫폼·프랜차이즈·금융·유통 생태계를 위한 구조 중심 IP 자산을 설계합니다.
            상세 설계 문서는 NDA 이후 제공됩니다.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
           <a
             href="mailto:reum206444@gmail.com?subject=[전략%20IP%20문의]&body=회사명:%0A담당자:%0A연락처:%0A관심산업:%0A검토유형(제휴/라이선스/인수):%0A간단요약:%0A"
             className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
           >
             문의하기
           </a>
            <a
              href="#focus"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white hover:border-white/40"
            >
              설계 영역 보기
            </a>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section id="focus" className="mx-auto max-w-5xl px-6 pb-10">
        <div className="mb-6">
  <h2 className="text-2xl font-semibold">핵심 설계 영역</h2>
  <p className="mt-2 text-white/70 text-sm">
    구조 단위로 모듈화된 설계 자산을 보유하고, 산업에 맞게 재조합합니다.
  </p>
</div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="mt-8">
  <a
    href="/focus"
    className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/40"
  >
    설계 영역 상세 보기 →
  </a>
</div>

          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition"
            >
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="mt-3 text-sm text-white/70 leading-relaxed">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEAL */}
      <section id="deal" className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">거래 구조</h2>
          <p className="mt-3 text-white/70">
            아래 형태로 검토 가능합니다. (세부 자료는 NDA 이후 제공)
          </p>

          <ul className="mt-6 grid gap-3 md:grid-cols-2 text-sm text-white/80">
            <li className="rounded-xl border border-white/10 bg-black/20 p-4">
              IP 양도 (Asset Sale)
            </li>
            <li className="rounded-xl border border-white/10 bg-black/20 p-4">
              산업/영역 독점 라이선스
            </li>
            <li className="rounded-xl border border-white/10 bg-black/20 p-4">
              지역 기반 라이선스 계약
            </li>
            <li className="rounded-xl border border-white/10 bg-black/20 p-4">
              전략적 공동 통합 모델
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">전략 문의</h2>
          <p className="mt-3 text-white/70">
            제휴 / 라이선스 / 인수 검토 목적의 문의만 받습니다.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/60">Email</div>
              <div className="mt-2 text-sm font-semibold">
                contact@yourdomain.com
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/60">Company</div>
              <div className="mt-2 text-sm font-semibold">
                (임시) Industrial IP Group
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Industrial IP Group. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
