import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface GeneralApplicationNotificationProps {
  name?: string
  email?: string
  phone?: string
  role?: string
  location?: string
  linkedin?: string
  portfolio?: string
  message?: string
  cvUrl?: string
  cvName?: string
  coverLetterUrl?: string
  coverLetterName?: string
  submittedAt?: string
}

const GeneralApplicationNotificationEmail = ({
  name,
  email,
  phone,
  role,
  location,
  linkedin,
  portfolio,
  message,
  cvUrl,
  cvName,
  coverLetterUrl,
  coverLetterName,
  submittedAt,
}: GeneralApplicationNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New career application{name ? ` from ${name}` : ''}
      {role ? ` for ${role}` : ''}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar} />
        <Heading style={h1}>New career application</Heading>
        <Text style={text}>
          A new general application was submitted on the Intraverse careers page.
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
          {phone && (
            <Text style={row}>
              <strong style={label}>Phone:</strong> {phone}
            </Text>
          )}
          {role && (
            <Text style={row}>
              <strong style={label}>Role of interest:</strong> {role}
            </Text>
          )}
          {location && (
            <Text style={row}>
              <strong style={label}>Location:</strong> {location}
            </Text>
          )}
          {linkedin && (
            <Text style={row}>
              <strong style={label}>LinkedIn:</strong>{' '}
              <Link href={linkedin} style={link}>
                {linkedin}
              </Link>
            </Text>
          )}
          {portfolio && (
            <Text style={row}>
              <strong style={label}>Portfolio / website:</strong>{' '}
              <Link href={portfolio} style={link}>
                {portfolio}
              </Link>
            </Text>
          )}
          {submittedAt && (
            <Text style={row}>
              <strong style={label}>Submitted:</strong> {submittedAt}
            </Text>
          )}
        </Section>

        {(cvUrl || coverLetterUrl) && (
          <Section style={attachmentsBox}>
            <Text style={messageLabel}>Attachments</Text>
            {cvUrl && (
              <Button href={cvUrl} style={button}>
                Download CV{cvName ? ` (${cvName})` : ''}
              </Button>
            )}
            {coverLetterUrl && (
              <Button
                href={coverLetterUrl}
                style={{ ...button, marginTop: '10px' }}
              >
                Download Cover Letter
                {coverLetterName ? ` (${coverLetterName})` : ''}
              </Button>
            )}
            <Text style={hintText}>
              Download links are valid for 7 days.
            </Text>
          </Section>
        )}

        {message && (
          <Section style={messageBox}>
            <Text style={messageLabel}>Additional details</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        )}

        <Text style={footer}>
          Reply directly to this email to reach {name || 'the applicant'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: GeneralApplicationNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New career application${data?.name ? ` — ${data.name}` : ''}${
      data?.role ? ` (${data.role})` : ''
    }`,
  displayName: 'Career application notification',
  to: 'support@intraverse.africa',
  previewData: {
    name: 'Tunde Bakare',
    email: 'tunde@example.com',
    phone: '+234 800 000 0000',
    role: 'Senior Backend Engineer',
    location: 'Lagos, Nigeria',
    linkedin: 'https://linkedin.com/in/tunde',
    portfolio: 'https://tunde.dev',
    message:
      'I have 6 years of experience building travel and fintech platforms across Africa.',
    cvUrl: 'https://example.com/cv.pdf',
    cvName: 'tunde-cv.pdf',
    coverLetterUrl: 'https://example.com/cover.pdf',
    coverLetterName: 'tunde-cover.pdf',
    submittedAt: 'Mon, 27 Apr 2026 10:00 UTC',
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
const link = {
  color: '#1E61DC',
  textDecoration: 'underline',
}
const attachmentsBox = {
  border: '1px solid #e1e8f2',
  borderRadius: '8px',
  padding: '16px 18px',
  margin: '0 0 18px',
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
  margin: '0 0 10px',
}
const messageText = {
  fontSize: '14px',
  color: '#0D1B2A',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
  margin: 0,
}
const button = {
  backgroundColor: '#1E61DC',
  color: '#ffffff',
  fontSize: '13px',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '10px 18px',
  borderRadius: '6px',
  display: 'inline-block',
}
const hintText = {
  fontSize: '12px',
  color: '#6b7280',
  margin: '12px 0 0',
}
const footer = {
  fontSize: '12px',
  color: '#6b7280',
  margin: '8px 0 0',
}
