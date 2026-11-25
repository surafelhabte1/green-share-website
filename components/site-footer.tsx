import { Leaf } from 'lucide-react'
import { useTranslations } from '@/lib/i18n'

const footerColumns = [
  { title: 'Company', links: ['About Us', 'Services', 'Technology', 'Contact'] },
  { title: 'Products', links: ['BOS Platform', 'GSF PMS', 'EQUB Digital', 'EDIR Digital'] },
  { title: 'Resources', links: ['Privacy Policy', 'Terms of Service', 'Compliance', 'LinkedIn ↗', 'X / Twitter ↗'] },
]

export function SiteFooter() {
  const { t } = useTranslations()
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a className="footer-logo" href="#top"><Leaf /> GSF</a><b>{t('Green Share Future PLC')}</b><p>{t('Sovereign technology.')}<br />{t('Sustainable progress.')}<br />{t('Built for Africa’s next century.')}</p><small>{t('Addis Ababa, Ethiopia')}</small></div>{footerColumns.map(col => <div className="footer-col" key={col.title}><h3>{t(col.title)}</h3>{col.links.map((item, i) => <a href={col.title === 'Products' ? '#products' : col.title === 'Company' && i === 3 ? '#contact' : '#about'} key={item}>{t(item)}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 Green Share Future PLC. {t('All rights reserved.')}</span><span>{t('EN / AM')}&nbsp;&nbsp;&nbsp;&nbsp; {t('ENGINEERED FOR TRUST.')}</span></div></div></footer>
}
