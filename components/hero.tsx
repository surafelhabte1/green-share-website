import { ArrowUpRight, Play, ShieldCheck } from 'lucide-react'
import { Eyebrow } from './site-header'

function SovereignMark() {
  return <div className="hero-art" aria-label="Abstract emerald architectural frames representing a connected sovereign infrastructure">
    <div className="art-label">GSF / SOVEREIGN CORE</div>
    <div className="frame-stack">
      <div className="frame frame-back" /><div className="frame frame-mid" /><div className="frame frame-front" />
      <div className="frame-core"><span /></div>
    </div>
    <i className="node node-one" /><i className="node node-two" /><i className="node node-three" />
    <span className="art-footnote">01 — CONNECTED BY DESIGN</span>
  </div>
}

export function Hero() {
  return <section className="hero" id="top">
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="hero-badge"><span>✦</span> Certified E-Invoicing &amp; Next-Gen Digital Platforms for Africa <span>↗</span></div>
        <h1>Engineering Africa’s<br /><span>Sovereign Digital</span><br />&amp; Sustainable<br />Infrastructure.</h1>
        <p className="hero-description">Green Share Future develops institutional-grade software ecosystems, Ministry-certified tax platforms, and verified real estate infrastructure driving transparent, sustainable commerce across Ethiopia.</p>
        <div className="hero-actions"><a className="primary-button" href="#products">Explore Our Solutions <ArrowUpRight size={15} /></a><a className="secondary-button" href="#technology"><Play size={13} /> Watch 2-Min Platform Tour</a></div>
        <p className="hero-note">BUILT IN ETHIOPIA. ENGINEERED FOR WHAT’S NEXT.</p>
      </div>
      <SovereignMark />
    </div>
    <div className="hero-bottom"><span>INSTITUTIONAL INFRASTRUCTURE&nbsp; / &nbsp;A CONNECTED ECOSYSTEM</span><span>01 — PLATFORM OVERVIEW</span></div>
    <div className="hero-proof"><ShieldCheck size={15} /><span><b>CRYPTOGRAPHICALLY VERIFIED</b><strong>SHA-256&nbsp; / &nbsp;RSA-4096</strong><small>Sovereign by design.</small></span></div>
  </section>
}
