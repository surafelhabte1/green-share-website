import { Leaf } from 'lucide-react'

const footerColumns = [
  { title: 'Company', links: ['About Us', 'Services', 'Technology', 'Contact'] },
  { title: 'Products', links: ['BOS Platform', 'GSF PMS', 'EQUB Digital', 'EDIR Digital'] },
  { title: 'Resources', links: ['Privacy Policy', 'Terms of Service', 'Compliance', 'LinkedIn ↗', 'X / Twitter ↗'] },
]

export function SiteFooter() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a className="footer-logo" href="#top"><Leaf /> GSF</a><b>Green Share Future PLC</b><p>Sovereign technology.<br />Sustainable progress.<br />Built for Africa&apos;s next century.</p><small>Addis Ababa, Ethiopia</small></div>{footerColumns.map(col => <div className="footer-col" key={col.title}><h3>{col.title}</h3>{col.links.map((item, i) => <a href={col.title === 'Products' ? '#products' : col.title === 'Company' && i === 3 ? '#contact' : '#about'} key={item}>{item}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 Green Share Future PLC. All rights reserved.</span><span>EN / ET&nbsp;&nbsp;&nbsp;&nbsp; ENGINEERED FOR TRUST.</span></div></div></footer>
}
