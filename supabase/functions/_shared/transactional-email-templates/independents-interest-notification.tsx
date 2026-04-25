import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface IndependentsInterestNotificationProps {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  details?: string
  submittedAt?: string
}

const IndependentsInterestNotificationEmail = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  details,
  submittedAt,
}: IndependentsInterestNotificationProps) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ')
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        New Independents Programme application{fullName ? ` from ${fullName}` : ''}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={brandBar} />
          <Heading style={h1}>New Independents Programme application</Heading>
          <Text style={text}>
            A new applicant has submitted interest in joining the Intraverse
            Independents Programme.
          </Text>

          <Section style={detailsBox}>
            {fullName && (
              <Text style={row}>
                <strong style={label}>Name:</strong> {fullName}
              </Text>
            )}
            {email && (
              <Text style={row}>
                <strong style={label}>Email:</strong> {email}
              </Text>
            )}
            {phoneNumber && (
              <Text style={row}>
                <strong style={label}>Phone:</strong> {phoneNumber}
              </Text>
            )}
            {submittedAt && (
              <Text style={row}>
                <strong style={label}>Submitted:</strong> {submittedAt}
              </Text>
            )}
          </Section>

          {details && (
            <Section style={messageBox}>
              <Text style={messageLabel}>Details</Text>
              <Text style={messageText}>{details}</Text>
            </Section>
          )}

          <Text style={footer}>
            Follow up with {firstName || 'the applicant'} via the contact
            details above, or view the full submission in the admin dashboard.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: IndependentsInterestNotificationEmail,
  subject: (data: Record<string, any>) => {
    const name = [data?.firstName, data?.lastName].filter(Boolean).join(' ')
    return `New Independents application${name ? ` — ${name}` : ''}`
  },
  displayName: 'Independents interest team notification',
  to: 'support@intraverse.africa',
  previewData: {
    firstName: 'Adaeze',
    lastName: 'Okeke',
    email: 'adaeze@example.com',
    phoneNumber: '+234 800 000 0000',
    details:
      'I run a travel-curation Instagram page with 12k followers and would like to monetise bookings.',
    submittedAt: 'Fri, 25 Apr 2026 09:12 UTC',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Inter', Arial, sans-serif",
}
const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '32px 24px',
}
const brandBar = {
  height: '4px',
  backgroundColor: '#1E61DC',
  marginBottom: '28px',
}
const h1 = {
  fontSize: '22px',
  fontWeight: 700,
  color: '#0D1B2A',
  margin: '0 0 12px',
}
const text = {
  fontSize: '14px',
  color: '#3a4a5d',
  lineHeight: '1.6',
  margin: '0 0 22px',
}
const detailsBox = {
  backgroundColor: '#F0F5FC',
  borderRadius: '8px',
  padding: '16px 18px',
  margin: '0 0 18px',
}
const row = {
  fontSize: '14px',
  color: '#0D1B2A',
  lineHeight: '1.5',
  margin: '0 0 6px',
}
const label = {
  color: '#1E61DC',
}
const messageBox = {
  border: '1px solid #e1e8f2',
  borderRadius: '8px',
  padding: '16px 18px',
  margin: '0 0 22px',
}
const messageLabel = {
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  color: '#1E61DC',
  fontWeight: 600,
  margin: '0 0 8px',
}
const messageText = {
  fontSize: '14px',
  color: '#0D1B2A',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
  margin: 0,
}
const footer = {
  fontSize: '12px',
  color: '#6b7280',
  margin: '8px 0 0',
}
