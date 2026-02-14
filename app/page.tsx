export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <header className="mb-14">
          <div className="text-sm tracking-widest text-white/60">INDUSTRIAL IP</div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            We acquire, build, and license
            <span className="text-white/70"> industrial IP</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            구조 기반 산업 IP 포트폴리오를 보유·설계·자산화합니다. 제휴/라이선스/인수 검토는 아래 채널로 문의하세요.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black"
            >
              Contact
            </a>
            <a
              href="#focus"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80"
            >
              Focus Areas
            </a>
          </div>
        </header>

        <section id="focus" className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Platform Architecture",
              desc: "O2O·폐쇄형 유입·정산·귀속 구조 등 산업 레벨 설계",
            },
            {
              title: "IP Portfolio",
              desc: "출원/준비/협상 가능 단계별 포트폴리오 운영",
            },
            {
              title: "Deal Enablement",
              desc: "NDA 이후 상세 자료 제공 및 협상 프로세스 지원",
            },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{x.title}</div>
              <div className="mt-3 text-sm leading-relaxed text-white/70">{x.desc}</div>
            </div>
          ))}
        </section>

        <section id="contact" className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-white/70">
            제휴 / 라이선스 / 인수 검토 목적의 문의만 받습니다. (세부 자료는 NDA 이후 제공)
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm text-white/60">Email</div>
              <div className="mt-2 text-base font-medium">your@email.com</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm text-white/60">Company</div>
              <div className="mt-2 text-base font-medium">Industrial IP Holdings</div>
            </div>
          </div>

          <p className="mt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Industrial IP Holdings. All rights reserved.
          </p>
        </section>
      </div>
    </main>
  );
}
