import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { FoundationSection, MissionSection, ProductsSection, SecuritySection, ServicesSection } from '@/components/sections'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return <main id="top"><SiteHeader /><Hero /><FoundationSection /><MissionSection /><ServicesSection /><ProductsSection /><SecuritySection /><ContactSection /><SiteFooter /></main>
}
