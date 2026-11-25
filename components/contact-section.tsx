'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Eyebrow } from './site-header'
import { useTranslations } from '@/lib/i18n'

export function ContactSection() {
  const { t } = useTranslations()
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setStatus('idle')
    const form = event.currentTarget
    const values = new FormData(form)

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.get('name'),
          email: values.get('email'),
          organization: values.get('organization'),
          product: values.get('product'),
          scope: values.get('scope'),
          website: values.get('website'),
        }),
      })
      if (!response.ok) throw new Error('send-failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return <section className="contact section" id="contact"><div className="container contact-layout"><div className="contact-copy"><Eyebrow>05 / LET&apos;S BUILD WHAT&apos;S NEXT</Eyebrow><h2>{t('The future is built')}<br />{t('on strong partnerships.')}</h2><p>{t('Tell us what you’re building. We’ll help you find the right infrastructure to move it forward.')}</p><div className="contact-details"><div><small>{t('HEADQUARTERS')}</small><span>{t('Addis Ababa, Ethiopia')}</span></div><div><small>{t('ENTERPRISE EMAIL')}</small><span>{t('Email to be provided')}</span></div><div><small>{t('CORPORATE PHONE')}</small><span>{t('Phone number to be provided')}</span></div><div><small>{t('PARTNERSHIP OFFICE')}</small><span>{t('Office hours to be confirmed')}</span></div></div><div className="location"><MapPin /> <span>{t('Green Share Future PLC')}<br />greensharefuture.com</span></div></div><form className="contact-form" onSubmit={submitInquiry} aria-labelledby="contact-form-title"><h3 id="contact-form-title">{t('Start a conversation')}</h3><p>{t('Connect with our enterprise team.')}</p><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><div className="form-row"><label>{t('Full Name')}<input name="name" autoComplete="name" placeholder={t('Your full name')} maxLength={120} required /></label><label>{t('Corporate Email')}<input name="email" type="email" autoComplete="email" placeholder={t('you@organization.com')} maxLength={254} required /></label></div><label>{t('Organization / Ministry')}<input name="organization" placeholder={t('Organization or ministry name')} maxLength={180} /></label><label>{t('Product of Interest')}<select name="product" defaultValue=""><option value="">{t('Select a platform')}</option>{['BOS Platform', 'GSF PMS', 'EQUB Digital', 'EDIR Digital', 'Enterprise Services'].map((product) => <option value={product} key={product}>{t(product)}</option>)}</select></label><label>{t('Project Scope')}<textarea name="scope" placeholder={t('Tell us about your goals, requirements, and timeline...')} maxLength={4000} rows={4} /></label><button type="submit" disabled={submitting}>{t(submitting ? 'Sending…' : 'Submit Inquiry')} <ArrowUpRight /></button><p className={`form-status ${status}`} role="status" aria-live="polite">{status === 'success' ? t('Thanks — your request has been sent. We’ll be in touch soon.') : status === 'error' ? t('We couldn’t send your request. Please try again.') : ''}</p><small className="form-note">{t('Please do not include passwords or sensitive financial information.')}</small></form></div></section>
}
