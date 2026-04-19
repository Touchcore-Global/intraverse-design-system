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

interface PartnerNotificationProps {
  name?: string
  email?: string
  company?: string
  role?: string
  partnershipType?: string
  message?: string
  submittedAt?: string
}

const PartnerNotificationEmail = ({
  name,
  email,
  company,
  role,
  partnershipType,
  message,
  submittedAt,
}: PartnerNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New partnership inquiry{name ? ` from ${name}` : ''}
      {company ? ` (${company})` : ''}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar} />
        <Heading style={h1}>New partnership inquiry</Heading>
        <Text style={text}>
          You have received a new partnership inquiry from the Intraverse website.
        </Text>

        <Section style={detailsBox}>
          {name && (
            <Text style={row}>
              <strong style={label}>Name:</strong> {name}
            </Text>
          )}
          {email && (
            <Text style={row}>
              <strong style={label}>Email:</strong> {email}
            </Text>
          )}
          {company && (
            <Text style={row}>
              <strong style={label}>Company:</strong> {company}
            </Text>
          )}
          {role && (
            <Text style={row}>
              <strong style={label}>Role:</strong> {role}
            </Text>
          )}
          {partnershipType && (
            <Text style={row}>
              <strong style={label}>Partnership type:</strong> {partnershipType}
            </Text>
          )}
          {submittedAt && (
            <Text style={row}>
              <strong style={label}>Submitted:</strong> {submittedAt}
            </Text>
          )}
        </Section>

        {message && (
          <Section style={messageBox}>
            <Text style={messageLabel}>What they're building</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        )}

        <Text style={footer}>
          Reply directly to this email to respond to {name || 'the sender'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: PartnerNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New partnership inquiry${data?.company ? ` — ${data.company}` : data?.name ? ` — ${data.name}` : ''}`,
  displayName: 'Partnership inquiry team notification',
  to: 'support@intraverse.africa',
  previewData: {
    name: 'Adaeze Okeke',
    email: 'adaeze@example.com',
    company: 'Skyline Travel',
    role: 'Head of Product',
    partnershipType: 'Fintech',
    message: 'We are exploring embedded travel for our card product.',
    submittedAt: 'Fri, 18 Apr 2026 09:12 UTC',
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
