import { Check, ChevronRight, CircleHelp, FileText, LayoutDashboard, Settings2, ShieldCheck, ArrowDownUp } from 'lucide-react'

const transactions = [['Invoice #BOS-0124', 'ETB 24,500'], ['Rent · Rose Residence', 'ETB 30,000'], ['Invoice #BOS-0183', 'ETB 12,800']]

export function PlatformDashboard() {
  return <div className="dashboard-wrap" id="technology">
    <div className="dashboard-window">
      <div className="dash-top"><span className="window-dots"><i /><i /><i /></span><span>platform.greensharefuture.com / overview</span><b>SECURE WORKSPACE</b></div>
      <div className="dash-body">
        <aside className="dash-sidebar"><div className="dash-logo">GSF / WORKSPACE</div><div className="dash-nav active"><LayoutDashboard /> Overview</div><div className="dash-nav"><FileText /> Fiscal invoices</div><div className="dash-nav"><Settings2 /> Properties</div><div className="dash-nav"><ArrowDownUp /> Transactions</div><div className="dash-nav"><CircleHelp /> Reports</div><div className="cert-box"><Check /> MoR CERTIFIED<small>Fiscal signing active<br />Online + offline sync</small></div></aside>
        <div className="dash-main"><div className="dash-heading"><div><h3>Your business, in sync.</h3><p>A single view of your financial infrastructure.</p></div><span className="live-pill"><i /> All systems operational</span></div>
          <div className="dash-stats"><article><small>Revenue collected</small><strong>ETB 2,450,800</strong><em>↑ 18.6% vs last month</em></article><article><small>Invoices signed</small><strong>1,284</strong><em>100% tax compliant</em></article><article><small>Rent collection</small><strong>96.8%</strong><em>Across 248 properties</em></article></div>
          <div className="dash-lower"><article className="chart-card"><div className="chart-title"><b>Revenue overview</b><small>Last 6 months⌄</small></div><div className="chart"><div className="chart-grid"><i /><i /><i /></div><svg viewBox="0 0 600 160" preserveAspectRatio="none" role="img" aria-label="Revenue trend rising over six months"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#10b981" stopOpacity=".32"/><stop offset="1" stopColor="#10b981" stopOpacity="0"/></linearGradient></defs><path d="M0 125 L55 113 L95 119 L132 91 L174 98 L218 72 L262 82 L309 49 L354 58 L397 34 L443 47 L488 24 L531 29 L573 10 L600 4 V160 H0Z" fill="url(#chartFill)"/><path d="M0 125 L55 113 L95 119 L132 91 L174 98 L218 72 L262 82 L309 49 L354 58 L397 34 L443 47 L488 24 L531 29 L573 10 L600 4" fill="none" stroke="#34d399" strokeWidth="2.5"/></svg></div><div className="chart-months"><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span></div></article><article className="transaction-card"><b>Secure transaction stream</b>{transactions.map(([name, value]) => <div className="transaction" key={name}><span>{name}<small><ShieldCheck /> Cryptographically verified</small></span><strong>{value}</strong></div>)}<a href="#products">View all transactions <ChevronRight /></a></article></div>
        </div>
      </div>
      <div className="dash-footer"><span>✓ SHA-256 page signed&nbsp; · &nbsp;RSA-4096 verified</span><span>Illustrative platform view</span></div>
    </div>
    <div className="compliance-float"><span><Check size={13} /> MoR CERTIFIED</span><strong>100% compliant.</strong><small>Online. Offline. Always aligned.</small></div>
  </div>
}
