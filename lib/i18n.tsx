'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Locale = 'en' | 'am'

type TranslationContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (message: string) => string }

const translations: Record<Locale, Record<string, string>> = {
  en: {},
  am: {
    'About Us': 'ስለ እኛ', 'Services': 'አገልግሎቶች', 'Products': 'ምርቶች', 'Technology': 'ቴክኖሎጂ', 'Contact': 'ያግኙን',
    'Client Portal': 'የደንበኛ መግቢያ', 'Schedule Demo': 'ማሳያ ያስይዙ',
    'Certified E-Invoicing & Next-Gen Digital Platforms for Africa': 'ለአፍሪካ የተረጋገጠ ኢ-ኢንቮይስ እና ዘመናዊ ዲጂታል መድረኮች',
    'Engineering Africa’s': 'የአፍሪካን ዲጂታል ልማት', 'Sovereign Digital': 'ሉዓላዊ ዲጂታል', '& Sustainable': 'እና ዘላቂ', 'Infrastructure.': 'መሠረተ ልማት እንገነባለን።',
    'Green Share Future develops institutional-grade software ecosystems, Ministry-certified tax platforms, and verified real estate infrastructure driving transparent, sustainable commerce across Ethiopia.': 'ግሪን ሼር ፊውቸር የተቋማዊ ደረጃ የሶፍትዌር ሥነ-ምህዳሮችን፣ በሚኒስቴር የተረጋገጡ የግብር መድረኮችን እና የተረጋገጠ የሪል እስቴት መሠረተ ልማትን ያበለጽጋል።',
    'Explore Our Solutions': 'መፍትሔዎቻችንን ይመልከቱ', 'Watch 2-Min Platform Tour': 'የ2 ደቂቃ ጉብኝት ይመልከቱ',
    'BUILT IN ETHIOPIA. ENGINEERED FOR WHAT’S NEXT.': 'በኢትዮጵያ የተገነባ። ለወደፊቱ የተዘጋጀ።', 'One sovereign foundation.': 'አንድ ሉዓላዊ መሠረት።',
    'Your business, in sync.': 'ንግድዎ በአንድ ላይ።', 'A single view of your financial infrastructure.': 'የፋይናንስ መሠረተ ልማትዎን በአንድ ቦታ ይመልከቱ።',
    'All systems operational': 'ሁሉም ሥርዓቶች እየሠሩ ነው', 'Revenue collected': 'የተሰበሰበ ገቢ', 'Invoices signed': 'የተፈረሙ ደረሰኞች', 'Rent collection': 'የኪራይ ክፍያ',
    'Revenue overview': 'የገቢ አጠቃላይ እይታ', 'Secure transaction stream': 'ደህንነቱ የተጠበቀ የግብይት ዝርዝር', 'Cryptographically verified': 'በክሪፕቶግራፊ የተረጋገጠ',
    'Building High-Trust': 'ከፍተኛ እምነት የሚጣልበት', 'Digital Infrastructure For': 'ዲጂታል መሠረተ ልማት ለ', 'The Next Century.': 'ቀጣዩ ክፍለ ዘመን።',
    'GSF is positioned to lead East Africa’s transition toward integrated green technology, smart urban infrastructure, and sovereign cloud ecosystems.': 'GSF የምስራቅ አፍሪካን ወደ የተቀናጀ አረንጓዴ ቴክኖሎጂ፣ ብልጥ የከተማ መሠረተ ልማት እና ሉዓላዊ የክላውድ ሥነ-ምህዳር ለውጥ ለመምራት ተዘጋጅቷል።',
    'Local understanding. Institutional standards. Lasting impact.': 'የአካባቢ ግንዛቤ። የተቋማት ደረጃ። ዘላቂ ተፅዕኖ።',
    'Regulatory Rigor': 'የቁጥጥር ጥብቅነት', 'Direct alignment with Ethiopian proclamation laws and fiscal authorities.': 'ከኢትዮጵያ አዋጆች እና የገቢ ባለሥልጣናት ጋር ቀጥተኛ ተስማሚነት።',
    'Sovereign Security': 'ሉዓላዊ ደህንነት', 'Zero-trust architecture with PostgreSQL Row-Level Security (RLS) data isolation.': 'በPostgreSQL የረድፍ ደረጃ ደህንነት (RLS) የተጠበቀ ዜሮ-እምነት አርክቴክቸር።',
    'Financial Transparency': 'የፋይናንስ ግልጽነት', 'Tamper-proof digital ledgers eliminating corruption and leakage.': 'ማጭበርበርን እና ብክነትን የሚከላከሉ ዲጂታል መዝገቦች።',
    'Community Empowerment': 'የማህበረሰብ ማብቃት', 'Bridging modern digital banking with traditional social structures.': 'ዘመናዊ ዲጂታል ባንክን ከባህላዊ ማህበራዊ መዋቅሮች ማገናኘት።',
    'Complex challenges.': 'ውስብስብ ተግዳሮቶች።', 'Precisely engineered.': 'በትክክል የተነደፉ።',
    'From your first deployment to national-scale infrastructure. One engineering partner, across every layer.': 'ከመጀመሪያ ማስጀመርዎ እስከ ብሔራዊ ደረጃ መሠረተ ልማት። በሁሉም ደረጃ አንድ የምህንድስና አጋር።',
    'Enterprise Software Engineering': 'የድርጅት ሶፍትዌር ምህንድስና', 'Enterprise Resource Planning (ERP)': 'የድርጅት ሀብት ዕቅድ (ERP)', 'Mobile App Development': 'የሞባይል መተግበሪያ ልማት', 'Modern Web Platforms & PWAs': 'ዘመናዊ የድር መድረኮች እና PWAዎች', '24/7 DevOps, SRE & Cloud Support': '24/7 DevOps፣ SRE እና የክላውድ ድጋፍ',
    'Mission-critical web applications, high-concurrency microservices, and distributed cloud backends.': 'ወሳኝ የድር መተግበሪያዎች፣ በከፍተኛ ተጠቃሚ የሚሠሩ ማይክሮሰርቪሶች እና የተከፋፈሉ የክላውድ ሥርዓቶች።',
    'Centralized financial consolidation, inventory tracking, supply chain, and multi-branch payroll.': 'የተማከለ የፋይናንስ ማጠቃለያ፣ የእቃ ክትትል፣ የአቅርቦት ሰንሰለት እና የቅርንጫፍ ደመወዝ አስተዳደር።',
    'High-performance iOS and Android native applications built with offline-first synchronization and biometric security.': 'ከመስመር ውጭ ቅድሚያ ማመሳሰል እና ባዮሜትሪክ ደህንነት ያላቸው ከፍተኛ አፈጻጸም የiOS እና Android መተግበሪያዎች።',
    'Ultra-fast, SEO-optimized, accessible Progressive Web Apps engineered for variable network bandwidths.': 'ለተለያዩ የኔትወርክ ፍጥነቶች የተዘጋጁ፣ ፈጣን፣ SEO የተመቻቹ እና ተደራሽ የProgressive Web Apps።',
    'Bare-metal clustering, PM2 process management, automated backup failovers, and enterprise SLA monitoring.': 'Bare-metal ክላስተር፣ PM2 ሂደት አስተዳደር፣ ራስ-ሰር የባክአፕ ምትክ እና የድርጅት SLA ክትትል።',
    'One ecosystem. A stronger foundation.': 'አንድ ሥነ-ምህዳር። ጠንካራ መሠረት።', 'Purpose-built platforms for compliant commerce, trusted property, and connected communities.': 'ለተስማሚ ንግድ፣ ታማኝ ንብረት እና የተገናኙ ማህበረሰቦች የተገነቡ መድረኮች።',
    'BOS Platform': 'BOS መድረክ', 'GSF PMS': 'GSF PMS', 'EQUB Digital': 'EQUB ዲጂታል', 'EDIR Digital': 'EDIR ዲጂታል', 'All platforms': 'ሁሉም መድረኮች',
    '(Fiscal E-Invoicing)': '(የግብር ኢ-ኢንቮይስ)', '(Real Estate & Property Management Subsystem)': '(ሪል እስቴት እና ንብረት አስተዳደር)',
    'Sovereign Tax Compliance & Instant Digital Invoicing.': 'ሉዓላዊ የግብር ተስማሚነት እና ፈጣን ዲጂታል ኢንቮይስ።', 'End-to-End Property Marketplace & Lease Management.': 'ከመጀመሪያ እስከ መጨረሻ የንብረት ገበያ እና የኪራይ አስተዳደር።',
    'Transparent Rotating Savings & Credit Platform.': 'ግልጽ የቁጠባ እና ብድር መድረክ።', 'Community Mutual Aid & Welfare Management.': 'የማህበረሰብ የጋራ እርዳታ እና ደህንነት አስተዳደር።',
    'Certified by the Ethiopian Ministry of Revenue (MoR). Real-time cryptographic QR signing, automated tax reconciliation, and dual online/offline resilience.': 'በኢትዮጵያ ገቢዎች ሚኒስቴር የተረጋገጠ። በቅጽበት የክሪፕቶግራፊ QR ፊርማ፣ ራስ-ሰር የግብር ማስታረቅ እና የመስመር ላይ/ውጭ ቀጣይነት።',
    'Verified building listings, automated lease lifecycle, digital rent collection, tenant ticketing, and direct landlord financial reconciliation.': 'የተረጋገጡ የህንፃ ዝርዝሮች፣ ራስ-ሰር የኪራይ ሂደት፣ ዲጂታል የኪራይ ክፍያ፣ የተከራይ ጥያቄ እና ቀጥተኛ የፋይናንስ ማስታረቅ።',
    'Automated member cycles, fraud-proof digital lotteries, Telebirr and banking integration, and transparent audit logs.': 'ራስ-ሰር የአባላት ዑደቶች፣ ማጭበርበርን የሚከላከሉ ዲጂታል ዕጣዎች፣ የTelebirr እና ባንክ ውህደት እና ግልጽ የኦዲት መዝገቦች።',
    'Digital membership directories, instant bereavement and emergency welfare disbursements, and automated member dues collection.': 'ዲጂታል የአባላት ማውጫ፣ ፈጣን የሀዘን እና የድንገተኛ እርዳታ ክፍያዎች፣ እና ራስ-ሰር የአባላት መዋጮ ስብስብ።',
    'Explore BOS Platform': 'BOS መድረክን ይመልከቱ', 'Explore GSF PMS': 'GSF PMSን ይመልከቱ', 'Discover EQUB Digital': 'EQUB ዲጂታልን ይወቁ', 'Discover EDIR Digital': 'EDIR ዲጂታልን ይወቁ',
    'Trust, built into every layer.': 'በእያንዳንዱ ደረጃ የተገነባ እምነት።', 'Your data is sovereign. Your operations are resilient. Your infrastructure is ready.': 'ውሂብዎ ሉዓላዊ ነው። ሥራዎ ጠንካራ ነው። መሠረተ ልማትዎ ዝግጁ ነው።',
    'Data Isolation': 'የውሂብ ለይቶ ማስቀመጥ', 'Multi-Tenant Row-Level Security (RLS). Every organization’s data stays isolated by design.': 'ባለብዙ ተጠቃሚ የረድፍ ደረጃ ደህንነት (RLS)። የእያንዳንዱ ድርጅት ውሂብ በተለየ ሁኔታ ይጠበቃል።',
    'Cryptographic Security': 'የክሪፕቶግራፊ ደህንነት', 'SHA-256 and RSA-4096 signature verification protect the integrity of every transaction.': 'የSHA-256 እና RSA-4096 ፊርማ ማረጋገጫ የእያንዳንዱን ግብይት ትክክለኛነት ይጠብቃል።',
    'High Availability': 'ከፍተኛ ተገኝነት', 'Multi-worker node clustering and sub-second query response times keep critical operations moving.': 'ባለብዙ የሥራ አስኬጅ ክላስተር እና ከአንድ ሰከንድ በታች የምላሽ ጊዜ ወሳኝ ሥራዎችን ያስቀጥላሉ።',
    'The future is built': 'የወደፊቱ ይገነባል', 'on strong partnerships.': 'በጠንካራ አጋርነት።', 'Tell us what you’re building. We’ll help you find the right infrastructure to move it forward.': 'ምን እየገነቡ እንደሆነ ይንገሩን። ወደፊት ለመሄድ ትክክለኛውን መሠረተ ልማት እንዲያገኙ እንረዳዎታለን።',
    'HEADQUARTERS': 'ዋና መሥሪያ ቤት', 'Addis Ababa, Ethiopia': 'አዲስ አበባ፣ ኢትዮጵያ', 'ENTERPRISE EMAIL': 'የድርጅት ኢሜይል', 'Email to be provided': 'ኢሜይል ይጨመራል', 'CORPORATE PHONE': 'የድርጅት ስልክ', 'Phone number to be provided': 'ስልክ ቁጥር ይጨመራል', 'PARTNERSHIP OFFICE': 'የአጋርነት ቢሮ', 'Office hours to be confirmed': 'የሥራ ሰዓት ይረጋገጣል',
    'Start a conversation': 'ውይይት ይጀምሩ', 'Connect with our enterprise team.': 'ከድርጅታችን ቡድን ጋር ይገናኙ።', 'Full Name': 'ሙሉ ስም', 'Corporate Email': 'የድርጅት ኢሜይል', 'Your full name': 'ሙሉ ስምዎ', 'you@organization.com': 'you@organization.com',
    'Organization / Ministry': 'ድርጅት / ሚኒስቴር', 'Organization or ministry name': 'የድርጅት ወይም ሚኒስቴር ስም', 'Product of Interest': 'የሚፈልጉት ምርት', 'Select a platform': 'መድረክ ይምረጡ', 'Project Scope': 'የፕሮጀክት ወሰን', 'Tell us about your goals, requirements, and timeline...': 'ስለ ግቦችዎ፣ መስፈርቶችዎ እና የጊዜ ሰሌዳዎ ይንገሩን...',
    'Submit Inquiry': 'ጥያቄውን ያስገቡ', 'Please do not include passwords or sensitive financial information.': 'እባክዎ የይለፍ ቃል ወይም ስሱ የፋይናንስ መረጃ አያካትቱ።', 'Sending…': 'በመላክ ላይ…', 'Thanks — your request has been sent. We’ll be in touch soon.': 'እናመሰግናለን — ጥያቄዎ ተልኳል። በቅርቡ እናገኝዎታለን።', 'We couldn’t send your request. Please try again.': 'ጥያቄዎን መላክ አልተቻለም። እባክዎ ደግመው ይሞክሩ።',
    'Green Share Future PLC': 'ግሪን ሼር ፊውቸር PLC', 'Sovereign technology.': 'ሉዓላዊ ቴክኖሎጂ።', 'Sustainable progress.': 'ዘላቂ እድገት።', 'Built for Africa’s next century.': 'ለአፍሪካ ቀጣይ ክፍለ ዘመን የተገነባ።', 'Company': 'ኩባንያ', 'Resources': 'ግብዓቶች', 'Privacy Policy': 'የግላዊነት ፖሊሲ', 'Terms of Service': 'የአገልግሎት ውል', 'Compliance': 'ተስማሚነት',
    'Enterprise Services': 'የድርጅት አገልግሎቶች', 'View all transactions': 'ሁሉንም ግብይቶች ይመልከቱ', '100% compliant.': '100% ተስማሚ።', 'Online. Offline. Always aligned.': 'በመስመር ላይ። ከመስመር ውጭ። ሁልጊዜ የተቀናጀ።', 'EN / AM': 'EN / አማ', 'ENGINEERED FOR TRUST.': 'ለእምነት የተነደፈ።',
    'FISCAL INFRASTRUCTURE': 'የግብር መሠረተ ልማት', 'PROPERTY INFRASTRUCTURE': 'የንብረት መሠረተ ልማት', 'COMMUNITY FINANCE': 'የማህበረሰብ ፋይናንስ', 'COMMUNITY WELFARE': 'የማህበረሰብ ደህንነት',
    'Fiscal invoice': 'የግብር ደረሰኝ', 'Portfolio overview': 'የንብረት አጠቃላይ እይታ', 'Together, every cycle.': 'በእያንዳንዱ ዑደት አብረን።', 'Support when it matters.': 'በሚያስፈልግበት ጊዜ ድጋፍ።', 'Properties': 'ንብረቶች', 'Occupancy': 'የመኖሪያ መጠን', 'Collected': 'ተሰብስቧል', 'Processing': 'በሂደት ላይ', 'Verified': 'የተረጋገጠ', 'Taxpayer verification': 'የግብር ከፋይ ማረጋገጫ', 'Cryptographic signature': 'የክሪፕቶግራፊ ፊርማ',
    'Invoice #BOS-0124': 'ደረሰኝ #BOS-0124', 'Rent · Rose Residence': 'ኪራይ · Rose Residence', 'Invoice #BOS-0183': 'ደረሰኝ #BOS-0183', 'Overview': 'አጠቃላይ እይታ', 'Fiscal invoices': 'የግብር ደረሰኞች', 'Transactions': 'ግብይቶች', 'Reports': 'ሪፖርቶች',
    '01 / OUR AMBITION & MISSION': '01 / ምኞታችን እና ተልዕኮአችን', '02 / ENTERPRISE SERVICES': '02 / የድርጅት አገልግሎቶች', '03 / THE CORE GSF SUITE': '03 / ዋናው የGSF ስብስብ', '04 / ARCHITECTURE & SECURITY': '04 / አርክቴክቸር እና ደህንነት', '05 / LET’S BUILD WHAT’S NEXT': '05 / የወደፊቱን አብረን እንገንባ',
    'GSF / SOVEREIGN CORE': 'GSF / ሉዓላዊ ዋና መዋቅር', '01 — CONNECTED BY DESIGN': '01 — በንድፍ የተገናኘ', 'INSTITUTIONAL INFRASTRUCTURE': 'የተቋማት መሠረተ ልማት', 'A CONNECTED ECOSYSTEM': 'የተገናኘ ሥነ-ምህዳር', '01 — PLATFORM OVERVIEW': '01 — የመድረኩ አጠቃላይ እይታ', 'CRYPTOGRAPHICALLY VERIFIED': 'በክሪፕቶግራፊ የተረጋገጠ', 'Sovereign by design.': 'በንድፍ ሉዓላዊ።', 'Abstract emerald architectural frames representing a connected sovereign infrastructure': 'የተገናኘ ሉዓላዊ መሠረተ ልማትን የሚወክሉ የኤመራልድ አርክቴክቸራል ቅርጾች', 'All rights reserved.': 'መብቱ የተጠበቀ ነው።',
    'DISTRIBUTED SYSTEMS': 'የተከፋፈሉ ሥርዓቶች', "05 / LET'S BUILD WHAT'S NEXT": '05 / የወደፊቱን አብረን እንገንባ', 'Main navigation': 'ዋና አሰሳ', 'Product suite categories': 'የምርት ስብስብ ምድቦች', 'Switch language to Amharic': 'ወደ አማርኛ ይቀይሩ', 'Switch language to English': 'ወደ እንግሊዝኛ ይቀይሩ', 'CONNECTED OPERATIONS': 'የተገናኙ ሥራዎች', 'OFFLINE-FIRST': 'ከመስመር ውጭ ቅድሚያ', 'PERFORMANCE BY DESIGN': 'በንድፍ ከፍተኛ አፈጻጸም', 'ALWAYS-ON RESILIENCE': 'ሁልጊዜ ዝግጁ ጥንካሬ', 'TRUST IS THE FOUNDATION. PERFORMANCE IS THE PROOF.': 'እምነት መሠረት ነው። አፈጻጸም ማረጋገጫ ነው።', 'Ministry of Revenue (MoR)': 'የኢትዮጵያ ገቢዎች ሚኒስቴር (MoR)', 'Certified Fiscal E-Invoicing': 'የተረጋገጠ የግብር ኢ-ኢንቮይስ', 'Real Estate & Rental': 'ሪል እስቴት እና ኪራይ', 'Property Capacity': 'የንብረት አቅም', 'High-Availability Infrastructure': 'ከፍተኛ ተገኝነት ያለው መሠረተ ልማት', 'with Dual Offline/Online Sync': 'ባለሁለት የመስመር ላይ/ውጭ ማመሳሰል', 'Bank & Telebirr': 'ባንክ እና Telebirr', 'Integrated Direct': 'የተቀናጀ ቀጥተኛ', 'Payment Rails': 'የክፍያ መስመሮች', 'Rent collected': 'የተሰበሰበ ኪራይ', 'Fiscal signing active': 'የግብር ፊርማ ንቁ ነው', 'Online + offline sync': 'የመስመር ላይ እና ውጭ ማመሳሰል', 'Last 6 months': 'ያለፉት 6 ወራት', '↑ 18.6% vs last month': '↑ 18.6% ከባለፈው ወር ጋር', '100% tax compliant': '100% የግብር ተስማሚ', 'Across 248 properties': 'በ248 ንብረቶች ላይ', 'RSA-4096 signed': 'በRSA-4096 የተፈረመ', 'Tamper-proof. Instantly verifiable.': 'የማይቀየር። ወዲያውኑ የሚረጋገጥ።', 'INVOICE NO. BOS-0124': 'ደረሰኝ ቁጥር BOS-0124', 'RENT COLLECTED': 'የተሰበሰበ ኪራይ', 'ACTIVE CYCLE': 'ንቁ ዑደት', 'SECURE': 'ደህንነቱ የተጠበቀ', 'Member directory': 'የአባላት ማውጫ', 'Emergency support disbursed': 'የድንገተኛ ድጋፍ ተከፍሏል', 'Complete': 'ተጠናቋል', 'Cycle 08 of 12': 'ዑደት 08 ከ12', '48 members': '48 አባላት', 'Transparent contributions. Auditable outcomes.': 'ግልጽ መዋጮዎች። የሚመረመሩ ውጤቶች።', 'Verified asset · Monthly rent': 'የተረጋገጠ ንብረት · ወርሃዊ ኪራይ',
  },
}

const TranslationContext = createContext<TranslationContextValue | null>(null)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  useEffect(() => { document.documentElement.lang = locale }, [locale])
  const value = useMemo<TranslationContextValue>(() => ({ locale, setLocale, t: (message) => translations[locale][message] ?? message }), [locale])
  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export function useTranslations() {
  const context = useContext(TranslationContext)
  if (!context) throw new Error('useTranslations must be used inside TranslationProvider')
  return context
}
