'use client'

import { TranslationProvider } from '@/lib/i18n'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { FoundationSection, MissionSection, ProductsSection, SecuritySection, ServicesSection } from '@/components/sections'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export function TranslatedSite() {
  return <TranslationProvider><main><SiteHeader /><Hero /><FoundationSection /><MissionSection /><ServicesSection /><ProductsSection /><SecuritySection /><ContactSection /><SiteFooter /></main></TranslationProvider>
}
