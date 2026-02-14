export default function FocusPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <a href="/" className="text-sm text-white/60 hover:text-white">
          ← 홈으로
        </a>

        <h1 className="mt-6 text-4xl font-semibold">설계 영역 상세</h1>
        <p className="mt-4 text-white/70 max-w-2xl">
          (임시) 세부 내용은 NDA 이후 제공됩니다. 여기에는 “무엇을 어떻게 설계하는가”의
          큰 구조와 적용 산업군만 공개합니다.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["유입·락인 구조", "QR/카드/멤버십 기반의 진입·귀속 구조 설계"],
            ["정산·배분 구조", "추천·제휴·다자간 배분 로직 및 정산 증빙"],
            ["거버넌스/통제 구조", "정책·권한·위험 통제 및 운영 규칙"],
            ["데이터 자산화 구조", "행동 데이터→자산/점수/권리로 전환하는 구조"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{t}</div>
              <div className="mt-3 text-sm text-white/70 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">문의</h2>
          <p className="mt-3 text-white/70">
            제휴/라이선스/인수 검토 목적의 문의만 받습니다.
          </p>
          <a
            className="mt-6 inline-flex rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
            href="mailto:reum206444@gmail.com?subject=[전략%20IP%20문의]"
          >
            메일로 문의하기
          </a>
        </div>
      </div>
    </main>
  );
}
