import { ArrowUpRight, Menu, Leaf } from 'lucide-react'

const links = [
  ['About Us', '#about'],
  ['Services', '#services'],
  ['Products', '#products'],
  ['Technology', '#technology'],
  ['Contact', '#contact'],
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Green Share Future home">
        <span className="brand-mark"><Leaf size={21} strokeWidth={2.5} /></span>
        <span className="brand-name">GSF</span>
        <span className="brand-caption">Green Share<br />Future</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <span className="language">EN / ET</span>
        <a className="portal-button" href="#contact">Client Portal</a>
        <a className="schedule-button" href="#contact">Schedule Demo</a>
      </div>
      <a href="#contact" className="mobile-menu" aria-label="Go to contact"><Menu size={21} /></a>
    </header>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export function ArrowLink({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) {
  return <a className="arrow-link" href={href}>{children}<ArrowUpRight size={15} /></a>
}
