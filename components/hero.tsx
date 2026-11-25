import { ArrowUpRight, Play, ShieldCheck } from 'lucide-react'
import { Eyebrow } from './site-header'
import { useTranslations } from '@/lib/i18n'

function SovereignMark() {
  const { t } = useTranslations()
  return <div className="hero-art" aria-label={t('Abstract emerald architectural frames representing a connected sovereign infrastructure')}>
    <div className="art-label">{t('GSF / SOVEREIGN CORE')}</div>
    <div className="frame-stack">
      <div className="frame frame-back" /><div className="frame frame-mid" /><div className="frame frame-front" />
      <div className="frame-core"><span /></div>
    </div>
    <i className="node node-one" /><i className="node node-two" /><i className="node node-three" />
    <span className="art-footnote">{t('01 — CONNECTED BY DESIGN')}</span>
  </div>
}

export function Hero() {
  const { t } = useTranslations()
  return <section className="hero" id="top">
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="hero-badge"><span aria-hidden="true">✦</span> {t('Certified E-Invoicing & Next-Gen Digital Platforms for Africa')} <span aria-hidden="true">↗</span></div>
        <h1 className="hero-headline"><span className="headline-line">{t('Engineering Africa’s')}</span><span className="headline-line accent-line">{t('Sovereign Digital')}</span><span className="headline-line">{t('& Sustainable')}</span><span className="headline-line">{t('Infrastructure.')}</span></h1>
        <p className="hero-description">{t('Green Share Future develops institutional-grade software ecosystems, Ministry-certified tax platforms, and verified real estate infrastructure driving transparent, sustainable commerce across Ethiopia.')}</p>
        <div className="hero-actions"><a className="primary-button" href="#products">{t('Explore Our Solutions')} <ArrowUpRight size={15} /></a><a className="secondary-button" href="#technology"><Play size={13} /> {t('Watch 2-Min Platform Tour')}</a></div>
        <p className="hero-note">{t('BUILT IN ETHIOPIA. ENGINEERED FOR WHAT’S NEXT.')}</p>
      </div>
      <SovereignMark />
    </div>
    <div className="hero-bottom"><span>{t('INSTITUTIONAL INFRASTRUCTURE')}&nbsp; / &nbsp;{t('A CONNECTED ECOSYSTEM')}</span><span>{t('01 — PLATFORM OVERVIEW')}</span></div>
    <div className="hero-proof"><ShieldCheck size={15} /><span><b>{t('CRYPTOGRAPHICALLY VERIFIED')}</b><strong>SHA-256&nbsp; / &nbsp;RSA-4096</strong><small>{t('Sovereign by design.')}</small></span></div>
  </section>
}
