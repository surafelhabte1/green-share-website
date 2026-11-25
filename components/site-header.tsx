import { ArrowUpRight, Menu, Leaf } from 'lucide-react'
import { useTranslations } from '@/lib/i18n'

const links = [
  ['About Us', '#about'],
  ['Services', '#services'],
  ['Products', '#products'],
  ['Technology', '#technology'],
  ['Contact', '#contact'],
]

export function SiteHeader() {
  const { t, locale, setLocale } = useTranslations()
  const changeLocale = () => setLocale(locale === 'en' ? 'am' : 'en')
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Green Share Future home">
        <span className="brand-mark"><Leaf size={21} strokeWidth={2.5} /></span>
        <span className="brand-name">GSF</span>
        <span className="brand-caption">Green Share<br />Future</span>
      </a>
      <nav className="main-nav" aria-label={t('Main navigation')}>
        {links.map(([label, href]) => <a key={href} href={href}>{t(label)}</a>)}
      </nav>
      <div className="header-actions">
        <button className="language" type="button" onClick={changeLocale} aria-label={t(locale === 'en' ? 'Switch language to Amharic' : 'Switch language to English')}>{locale === 'en' ? 'EN / አማ' : 'አማ / EN'}</button>
        <a className="portal-button" href="#contact">{t('Client Portal')}</a>
        <a className="schedule-button" href="#contact">{t('Schedule Demo')}</a>
      </div>
      <div className="mobile-header-actions"><button className="mobile-language" type="button" onClick={changeLocale} aria-label={t(locale === 'en' ? 'Switch language to Amharic' : 'Switch language to English')}>{locale === 'en' ? 'EN' : 'አማ'}</button><a href="#contact" className="mobile-menu" aria-label={t('Contact')}><Menu size={21} /></a></div>
    </header>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  const { t } = useTranslations()
  return <p className="eyebrow">{typeof children === 'string' ? t(children) : children}</p>
}

export function ArrowLink({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) {
  return <a className="arrow-link" href={href}>{children}<ArrowUpRight size={15} /></a>
}
