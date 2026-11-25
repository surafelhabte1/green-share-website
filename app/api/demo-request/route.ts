import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const allowedProducts = new Set([
  'BOS Platform',
  'GSF PMS',
  'EQUB Digital',
  'EDIR Digital',
  'Enterprise Services',
])

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().replace(/[\u0000-\u001f\u007f]/g, '').slice(0, maxLength) : ''
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>
  try {
    const body = await request.json()
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
    }
    payload = body as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (clean(payload.website, 200)) {
    return NextResponse.json({ success: true })
  }

  const name = clean(payload.name, 120)
  const email = clean(payload.email, 254).toLowerCase()
  const organization = clean(payload.organization, 180)
  const product = clean(payload.product, 80)
  const scope = clean(payload.scope, 4000)

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid name and email.' }, { status: 400 })
  }
  if (product && !allowedProducts.has(product)) {
    return NextResponse.json({ error: 'Please select a valid product.' }, { status: 400 })
  }

  const user = process.env.GMAIL_SMTP_USER
  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '')
  const recipient = process.env.DEMO_REQUEST_TO
  if (!user || !password || !recipient) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user, pass: password },
    })

    await transporter.sendMail({
      from: `Green Share Future Website <${user}>`,
      to: recipient,
      replyTo: { name, address: email },
      subject: `Website demo request — ${name}`,
      text: [
        'A new demo request was submitted on the Green Share Future website.',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization / Ministry: ${organization || 'Not provided'}`,
        `Product of interest: ${product || 'Not selected'}`,
        '',
        'Project scope:',
        scope || 'Not provided',
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Unable to send your request right now.' }, { status: 502 })
  }
}
