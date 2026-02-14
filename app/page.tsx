"use client";

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
        <h1 className="text-5xl font-semibold leading-tight">
          산업 구조 설계 기반
          <br />
          전략 IP 그룹
        </h1>

        <div className="mt-8 flex gap-4">
          <Link
  href="/contact"
  className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
>
  문의하기
</Link>


         <Link
  href="/structure"
  className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white hover:border-white/40"
>
  설계 영역 보기
</Link>

        </div>
      </section>

      {/* FOCUS */}
      <section id="focus" className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-12">핵심 설계 영역</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["산업 구조 설계", "IP 포트폴리오", "거래 지원"].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold">{item}</div>
                <button
                  className="mt-6 text-sm text-white/70 hover:text-white"
                  onClick={() => window.location.href = "#deal"}
                >
                  자세히 보기 →
                </button>
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
            {[
              "IP 양도",
              "독점 라이선스",
              "지역 기반 계약",
              "전략적 통합 모델",
            ].map((deal) => (
              <div
                key={deal}
                className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="font-semibold">{deal}</div>
                <button
                  className="mt-6 text-sm text-white/70 hover:text-white"
                  onClick={() => window.location.href = "#contact"}
                >
                  검토 요청 →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-6">전략 문의</h2>

          <button
            onClick={() =>
              window.location.href = "mailto:contact@yourdomain.com"
            }
            className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            이메일 문의
          </button>
        </div>
      </section>
    </main>
  );
}
