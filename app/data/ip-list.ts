// app/data/ip-list.ts

export type IPStatus = 'Filed' | 'Pending' | 'Granted'
export type DealType = 'License' | 'Exclusive License' | 'Full Transfer'
export type Industry =
  | 'Platform'
  | 'Retail'
  | 'Finance'
  | 'Distribution'
  | 'Healthcare'
  | 'Manufacturing'
  | 'Franchise'
  | 'Data'

export type IPItem = {
  slug: string
  code: string
  title: string
  industries: Industry[]
  status: IPStatus
  region: string[] // e.g., ['KR','US']
  dealType: DealType[]
  exclusivity: 'Yes' | 'No' | 'Conditional'
  readiness: 1 | 2 | 3 | 4 | 5
  summary: string
  updatedAt: string // YYYY-MM-DD
}

export const IP_LIST: IPItem[] = [
  {
    slug: 'offline-first-touch-attribution',
    code: 'IP-001',
    title: 'Offline First-Touch Attribution & Control',
    industries: ['Platform', 'Retail', 'Data'],
    status: 'Filed',
    region: ['KR'],
    dealType: ['Exclusive License', 'License'],
    exclusivity: 'Conditional',
    readiness: 4,
    summary:
      'Controlled entry + attribution binding logic for offline-first acquisition mapped to ongoing purchase revenue.',
    updatedAt: '2026-02-10'
  },
  {
    slug: 'closed-entry-commerce-gating',
    code: 'IP-002',
    title: 'Closed-Entry Commerce Gating System',
    industries: ['Platform', 'Retail'],
    status: 'Pending',
    region: ['KR'],
    dealType: ['License'],
    exclusivity: 'Yes',
    readiness: 3,
    summary:
      'Membership gating architecture enabling price-protected commerce access with controlled entry channels.',
    updatedAt: '2026-02-09'
  },
  {
    slug: 'qr-origin-binding-settlement',
    code: 'IP-003',
    title: 'QR Origin Binding & Automated Settlement',
    industries: ['Distribution', 'Franchise', 'Platform'],
    status: 'Filed',
    region: ['KR'],
    dealType: ['Exclusive License', 'License'],
    exclusivity: 'Conditional',
    readiness: 5,
    summary:
      'Origin QR binding and revenue attribution settlement engine with long-tail purchase tracking.',
    updatedAt: '2026-02-08'
  },
  {
    slug: 'multi-channel-invite-token',
    code: 'IP-004',
    title: 'Multi-Channel Invite Token Architecture',
    industries: ['Platform', 'Data'],
    status: 'Pending',
    region: ['KR'],
    dealType: ['License'],
    exclusivity: 'No',
    readiness: 3,
    summary:
      'Invite/entry token system supporting physical+digital channels while preserving referral attribution.',
    updatedAt: '2026-02-07'
  },
  {
    slug: 'partner-revenue-share-rails',
    code: 'IP-005',
    title: 'Partner Revenue-Share Rails (Attribution → Payout)',
    industries: ['Franchise', 'Distribution', 'Finance'],
    status: 'Filed',
    region: ['KR'],
    dealType: ['Exclusive License', 'License'],
    exclusivity: 'Conditional',
    readiness: 4,
    summary:
      'Ruleset and processing rails for automatic partner settlement based on attributed customer activity.',
    updatedAt: '2026-02-06'
  },
  {
    slug: 'anti-duplication-region-lock',
    code: 'IP-006',
    title: 'Anti-Duplication Region Lock & Access Control',
    industries: ['Platform', 'Retail', 'Distribution'],
    status: 'Pending',
    region: ['KR'],
    dealType: ['License'],
    exclusivity: 'No',
    readiness: 2,
    summary:
      'Mechanisms to reduce duplicate entry paths and enforce region/partner-based access constraints.',
    updatedAt: '2026-02-05'
  },
  {
    slug: 'proof-log-chain-for-disputes',
    code: 'IP-007',
    title: 'Proof Log Chain for Attribution Disputes',
    industries: ['Platform', 'Finance', 'Data'],
    status: 'Filed',
    region: ['KR'],
    dealType: ['License', 'Full Transfer'],
    exclusivity: 'Conditional',
    readiness: 4,
    summary:
      'Audit and evidence-friendly logging structure supporting disputes over attribution and payout.',
    updatedAt: '2026-02-04'
  },
  {
    slug: 'embedded-esg-contribution-tracking',
    code: 'IP-008',
    title: 'Embedded ESG Contribution Tracking in Commerce',
    industries: ['Retail', 'Platform'],
    status: 'Pending',
    region: ['KR'],
    dealType: ['License'],
    exclusivity: 'No',
    readiness: 2,
    summary:
      'Transaction-linked ESG allocation and reporting structures compatible with closed-entry commerce.',
    updatedAt: '2026-02-03'
  },
  {
    slug: 'card-network-entry-benefit-linkage',
    code: 'IP-009',
    title: 'Card Network Entry & Benefit Linkage',
    industries: ['Finance', 'Platform'],
    status: 'Filed',
    region: ['KR'],
    dealType: ['Exclusive License', 'License'],
    exclusivity: 'Yes',
    readiness: 3,
    summary:
      'Entry credentialing and benefit mapping model suitable for card-linked commerce and partner rails.',
    updatedAt: '2026-02-02'
  },
  {
    slug: 'modular-ip-stack-packaging',
    code: 'IP-010',
    title: 'Modular IP Stack Packaging for Enterprise Deals',
    industries: ['Platform', 'Data', 'Distribution'],
    status: 'Granted',
    region: ['KR'],
    dealType: ['Full Transfer', 'Exclusive License'],
    exclusivity: 'Yes',
    readiness: 5,
    summary:
      'Packaging and decomposition scheme to sell/license IP as modules while preserving enforceable scope.',
    updatedAt: '2026-02-01'
  }
]
