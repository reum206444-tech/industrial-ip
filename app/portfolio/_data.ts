export type IPStatus = 'Concept' | 'Filed' | 'Pending' | 'Granted'
export type DealType = 'Transfer' | 'Exclusive License' | 'Regional' | 'Integration'
export type Domain = 'Platform' | 'Franchise' | 'Finance' | 'Distribution'

export type IPItem = {
  slug: string
  codename: string
  title: string
  domain: Domain[]
  dealTypes: DealType[]
  status: IPStatus
  exclusivity: 'Yes' | 'No' | 'Conditional'
  dealReady: 1 | 2 | 3 | 4 | 5
  oneLiner: string

  buyerFit: string[]
  valueSignals: string[]
  deliverablesTeaser: string[]
  disclosureNote: string
}

export const IP_LIST: IPItem[] = [
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
    buyerFit: ['대형 플랫폼', '유통/커머스', '결제/포인트 생태계'],
    valueSignals: ['유입 귀속 고정', '정산 구조화', '확산 루프 설계'],
    deliverablesTeaser: ['Teaser 범위 정의', '거래 옵션 매칭', 'NDA 후 상세 패키지'],
    disclosureNote: 'Detailed structural documentation available under NDA only.',
  },
  {
    slug: 'closed-o2o-secret-mall',
    codename: 'IP-02',
    title: 'Closed O2O Commerce Loop',
    domain: ['Platform', 'Franchise', 'Distribution'],
    dealTypes: ['Transfer', 'Exclusive License', 'Regional'],
    status: 'Filed',
    exclusivity: 'Conditional',
    dealReady: 4,
    oneLiner: '폐쇄형 진입과 확산 구조로 가격·락인을 동시에 설계합니다.',
    buyerFit: ['프랜차이즈 본부', '오프라인 네트워크 기업'],
    valueSignals: ['폐쇄형 진입', 'O2O 순환', '지역 계약 적합'],
    deliverablesTeaser: ['적용 시나리오', '권리 경계 초안', 'NDA 후 상세'],
    disclosureNote: 'Detailed structural documentation available under NDA only.',
  },
]
