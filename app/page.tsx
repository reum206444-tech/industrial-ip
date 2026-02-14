export default function Home() {
  return (
    <main className="p-12 space-y-24">

      {/* HERO */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">
          산업 구조 설계 기반 전략 IP 그룹
        </h1>
        <p className="text-lg text-gray-600">
          플랫폼, 프랜차이즈, 금융 및 유통 생태계를 위한
          구조 중심 특허 자산을 설계합니다.
        </p>
        <p className="text-gray-500">
          우리는 제품을 판매하지 않습니다.
          산업 구조를 설계하고, 통제 가능한 시스템을 만듭니다.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">우리는 누구인가</h2>
        <p>
          당사는 산업 레벨의 구조 설계를 기반으로
          특허화 가능한 모듈형 아키텍처를 기획·보유하는
          독립 전략 설계 그룹입니다.
        </p>
        <p>
          O2O 귀속 통제, 정산 구조 설계, 멤버십 기반 구매 권한 제어,
          데이터 이전 로직 등 산업 단위의 구조 설계를 수행합니다.
        </p>
      </section>

      {/* WHAT WE DESIGN */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">핵심 설계 영역</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">구조형 특허 아키텍처 설계</h3>
            <p className="text-gray-600">
              산업 구조를 모듈화하고 특허 전략에 맞게 설계합니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">O2O 귀속 및 통제 구조</h3>
            <p className="text-gray-600">
              오프라인 유입을 디지털 자산 흐름으로 전환하는 구조를 설계합니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">정산·귀속 증명 엔진 구조</h3>
            <p className="text-gray-600">
              매출 귀속, 경로 통제, 회원 이전 로직을 포함한
              통합 정산 구조를 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICABLE INDUSTRIES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">적용 산업 범위</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>프랜차이즈 본사 및 가맹 네트워크</li>
          <li>카드·금융 생태계</li>
          <li>플랫폼 기반 커머스 기업</li>
          <li>멀티 브랜드 리테일 구조</li>
          <li>멤버십 기반 산업 구조</li>
        </ul>
      </section>

      {/* TRANSACTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">거래 구조</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>IP 양도</li>
          <li>산업별 독점 라이선스</li>
          <li>지역 기반 라이선스 계약</li>
          <li>전략적 공동 통합 모델</li>
        </ul>
        <p className="text-gray-500">
          상세 설계 문서는 NDA 체결 이후 제공됩니다.
        </p>
      </section>

      {/* CONTACT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">전략 문의</h2>
        <p>
          인수 검토, 라이선스 협의, 전략 제휴 관련 문의는
          아래 이메일로 연락 바랍니다.
        </p>
        <p className="font-semibold">
          contact@yourdomain.com
        </p>
      </section>

    </main>
  );
}
