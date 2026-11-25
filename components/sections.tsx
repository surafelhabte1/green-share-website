import { ArrowDown, ArrowUpRight, Check, LockKeyhole, ShieldCheck, Zap } from 'lucide-react'
import { ArrowLink, Eyebrow } from './site-header'
import { PlatformDashboard } from './platform-dashboard'
import { useTranslations } from '@/lib/i18n'

const pillars = [
  ['01', 'Regulatory Rigor', 'Direct alignment with Ethiopian proclamation laws and fiscal authorities.'],
  ['02', 'Sovereign Security', 'Zero-trust architecture with PostgreSQL Row-Level Security (RLS) data isolation.'],
  ['03', 'Financial Transparency', 'Tamper-proof digital ledgers eliminating corruption and leakage.'],
  ['04', 'Community Empowerment', 'Bridging modern digital banking with traditional social structures.'],
]
const services = [
  ['01', 'Enterprise Software Engineering', 'Mission-critical web applications, high-concurrency microservices, and distributed cloud backends.', 'DISTRIBUTED SYSTEMS'],
  ['02', 'Enterprise Resource Planning (ERP)', 'Centralized financial consolidation, inventory tracking, supply chain, and multi-branch payroll.', 'CONNECTED OPERATIONS'],
  ['03', 'Mobile App Development', 'High-performance iOS and Android native applications built with offline-first synchronization and biometric security.', 'OFFLINE-FIRST'],
  ['04', 'Modern Web Platforms & PWAs', 'Ultra-fast, SEO-optimized, accessible Progressive Web Apps engineered for variable network bandwidths.', 'PERFORMANCE BY DESIGN'],
  ['05', '24/7 DevOps, SRE & Cloud Support', 'Bare-metal clustering, PM2 process management, automated backup failovers, and enterprise SLA monitoring.', 'ALWAYS-ON RESILIENCE'],
]
const products = [
  { label: 'FISCAL INFRASTRUCTURE', name: 'BOS Platform', subtitle: '(Fiscal E-Invoicing)', desc: 'Sovereign Tax Compliance & Instant Digital Invoicing.', detail: 'Certified by the Ethiopian Ministry of Revenue (MoR). Real-time cryptographic QR signing, automated tax reconciliation, and dual online/offline resilience.', kind: 'invoice' },
  { label: 'PROPERTY INFRASTRUCTURE', name: 'GSF PMS', subtitle: '(Real Estate & Property Management Subsystem)', desc: 'End-to-End Property Marketplace & Lease Management.', detail: 'Verified building listings, automated lease lifecycle, digital rent collection, tenant ticketing, and direct landlord financial reconciliation.', kind: 'portfolio' },
  { label: 'COMMUNITY FINANCE', name: 'EQUB Digital', subtitle: '', desc: 'Transparent Rotating Savings & Credit Platform.', detail: 'Automated member cycles, fraud-proof digital lotteries, Telebirr and banking integration, and transparent audit logs.', kind: 'cycle' },
  { label: 'COMMUNITY WELFARE', name: 'EDIR Digital', subtitle: '', desc: 'Community Mutual Aid & Welfare Management.', detail: 'Digital membership directories, instant bereavement and emergency welfare disbursements, and automated member dues collection.', kind: 'welfare' },
]

export function FoundationSection() {
  const { t } = useTranslations()
  return <section className="foundation section" id="about"><div className="container"><div className="foundation-heading"><h2>{t('One sovereign foundation.')}</h2><span>BOS&nbsp; / &nbsp;PMS&nbsp; / &nbsp;EQUB&nbsp; / &nbsp;EDIR</span></div><PlatformDashboard /><p className="trust-line">{t('TRUST IS THE FOUNDATION. PERFORMANCE IS THE PROOF.')}</p><div className="metrics"><div><strong>100%</strong><span>{t('Ministry of Revenue (MoR)')}<br />{t('Certified Fiscal E-Invoicing')}</span></div><div><strong>500K+</strong><span>{t('Real Estate & Rental')}<br />{t('Property Capacity')}</span></div><div><strong>99.99%</strong><span>{t('High-Availability Infrastructure')}<br />{t('with Dual Offline/Online Sync')}</span></div><div className="bank-metric"><strong>{t('Bank & Telebirr')}</strong><span>{t('Integrated Direct')}<br />{t('Payment Rails')}</span></div></div></div></section>
}

export function MissionSection() {
  const { t } = useTranslations()
  return <section className="mission section"><div className="container"><div className="section-intro" id="ambition"><div><Eyebrow>01 / OUR AMBITION &amp; MISSION</Eyebrow><h2>{t('Building High-Trust')}<br />{t('Digital Infrastructure For')}<br />{t('The Next Century.')}</h2></div><div className="intro-copy"><p>{t('GSF is positioned to lead East Africa’s transition toward integrated green technology, smart urban infrastructure, and sovereign cloud ecosystems.')}</p><strong>{t('Local understanding. Institutional standards. Lasting impact.')}</strong></div></div><div className="pillar-grid">{pillars.map(([num, title, desc]) => <article className="pillar-card" key={num}><span>{num}</span><ArrowUpRight /><h3>{t(title)}</h3><p>{t(desc)}</p></article>)}</div></div></section>
}

export function ServicesSection() {
  const { t } = useTranslations()
  return <section className="services section" id="services"><div className="container"><div className="section-intro service-intro"><div><Eyebrow>02 / ENTERPRISE SERVICES</Eyebrow><h2>{t('Complex challenges.')}<br />{t('Precisely engineered.')}</h2></div><p>{t('From your first deployment to national-scale infrastructure. One engineering partner, across every layer.')}</p></div><div className="service-grid">{services.map(([num, title, desc, tag]) => <article className={`service-card ${num === '01' ? 'featured' : ''}`} key={num}><span className="service-number">{num}</span><div className="service-content"><h3>{t(title)}</h3><p>{t(desc)}</p><small>{t(tag)}</small></div><ArrowUpRight className="service-arrow" /></article>)}</div></div></section>
}

function ProductPreview({ kind }: { kind: string }) {
  const { t } = useTranslations()
  if (kind === 'invoice') return <div className="product-preview invoice-preview"><div className="preview-head"><b>{t('Fiscal invoice')}</b><span>✓ MoR CERTIFIED</span></div><small>INVOICE NO. BOS-0124</small><strong>ETB 24,500.00</strong><div className="preview-row"><span>Taxpayer verification</span><b>✓ Verified</b></div><div className="preview-row"><span>Cryptographic signature</span><b>✓ RSA-4096 signed</b></div><div className="preview-success"><Check /> Tamper-proof. Instantly verifiable.</div></div>
  if (kind === 'portfolio') return <div className="product-preview"><div className="preview-head"><b>{t('Portfolio overview')}</b><span>✓ VERIFIED</span></div><div className="portfolio-numbers"><div><small>{t('Properties')}</small><b>248</b></div><div><small>{t('Occupancy')}</small><b>94.2%</b></div><div><small>{t('Rent collected')}</small><b>96.8%</b></div></div>{[['Bole Residence', 'ETB 30,000', 'Collected'], ['Kazanchis Offices', 'ETB 62,500', 'Collected'], ['CMC Apartments', 'ETB 24,000', 'Processing']].map(row => <div className="preview-row" key={row[0]}><span>{row[0]}<small>Verified asset · Monthly rent</small></span><b>{row[1]} <em>{row[2]}</em></b></div>)}</div>
  if (kind === 'cycle') return <div className="product-preview cycle-preview"><div className="preview-head"><b>{t('Together, every cycle.')}</b><span>● ACTIVE CYCLE</span></div><small>Cycle 08 of 12 &nbsp; · &nbsp; 48 members</small><div className="cycle-bars">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div><small>Transparent contributions. Auditable outcomes.</small></div>
  return <div className="product-preview welfare-preview"><div className="preview-head"><b>{t('Support when it matters.')}</b><span>✓ SECURE</span></div><small>Community welfare · Member directory</small><div className="preview-success"><Check /> Emergency support disbursed <span>Complete</span></div></div>
}

export function ProductsSection() {
  const { t } = useTranslations()
  return <section className="products section" id="products"><div className="container"><Eyebrow>03 / THE CORE GSF SUITE</Eyebrow><h2>{t('One ecosystem. A stronger foundation.')}</h2><p className="section-subtitle">{t('Purpose-built platforms for compliant commerce, trusted property, and connected communities.')}</p><div className="product-tabs" aria-label={t('Product suite categories')}>{['All platforms', 'BOS Platform', 'GSF PMS', 'EQUB Digital', 'EDIR Digital'].map((tab, i) => <a href={i ? `#product-${i}` : '#products'} className={i === 0 ? 'selected' : ''} key={tab}>{t(tab)}</a>)}</div><div className="product-grid">{products.map((product, i) => <article className="product-card" id={`product-${i + 1}`} key={product.kind}><span className="product-label">{t(product.label)}</span><ArrowUpRight className="product-arrow" /><h3>{t(product.name)}{product.subtitle && <><br />{t(product.subtitle)}</>}</h3><b className="product-desc">{t(product.desc)}</b><p>{t(product.detail)}</p><ProductPreview kind={product.kind} /><ArrowLink href="#contact">{t(i === 0 ? 'Explore BOS Platform' : i === 1 ? 'Explore GSF PMS' : `Discover ${product.name}`)}</ArrowLink></article>)}</div></div></section>
}

const architectureLayers = ['BOS', 'PMS', 'EQUB', 'EDIR']
export function SecuritySection() {
  const { t } = useTranslations()
  return <section className="security section" id="technology-security"><div className="container"><Eyebrow>04 / ARCHITECTURE &amp; SECURITY</Eyebrow><h2>{t('Trust, built into every layer.')}</h2><p className="section-subtitle">{t('Your data is sovereign. Your operations are resilient. Your infrastructure is ready.')}</p><div className="security-panel"><div className="security-points"><article><span>01</span><div><b>{t('Data Isolation')}</b><p>{t('Multi-Tenant Row-Level Security (RLS). Every organization’s data stays isolated by design.')}</p></div></article><article><span>02</span><div><b>{t('Cryptographic Security')}</b><p>{t('SHA-256 and RSA-4096 signature verification protect the integrity of every transaction.')}</p></div></article><article><span>03</span><div><b>{t('High Availability')}</b><p>{t('Multi-worker node clustering and sub-second query response times keep critical operations moving.')}</p></div></article></div><div className="architecture"><div className="arch-tabs">{architectureLayers.map(x => <span key={x}>{x}</span>)}</div><ArrowDown className="arch-down" /><div className="arch-secure"><LockKeyhole /> SHA-256&nbsp; / &nbsp;RSA-4096&nbsp; —&nbsp; VERIFIED</div><ArrowDown className="arch-down" /><div className="arch-caption">POSTGRESQL · ROW-LEVEL SECURITY</div><div className="tenant-row">{['Tenant A', 'Tenant B', 'Tenant C'].map((x, i) => <div key={x}><ShieldCheck /><b>{x}</b><small>{['Isolation', 'Tenant ID', 'Tenant RLS'][i]}</small></div>)}</div><div className="arch-sync"><Zap /> MULTI-WORKER CLUSTER · DUAL SYNC</div><small className="arch-footer">SOVEREIGN BY DESIGN</small></div></div></div></section>
}
