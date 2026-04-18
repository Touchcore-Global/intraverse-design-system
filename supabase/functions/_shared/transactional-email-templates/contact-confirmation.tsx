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

const SITE_NAME = 'Intraverse'

interface ContactConfirmationProps {
  name?: string
  reason?: string
  message?: string
}

const ContactConfirmationEmail = ({
  name,
  reason,
  message,
}: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar} />
        <Heading style={h1}>
          {name ? `Thank you, ${name}!` : 'Thank you for reaching out!'}
        </Heading>
        <Text style={text}>
          We've received your message and a member of the {SITE_NAME} team will
          get back to you shortly — usually within one business day.
        </Text>

        {(reason || message) && (
          <Section style={summaryBox}>
            <Text style={summaryLabel}>Your enquiry</Text>
            {reason && (
              <Text style={summaryRow}>
                <strong>Reason:</strong> {reason}
              </Text>
            )}
            {message && (
              <Text style={summaryRow}>
                <strong>Message:</strong> {message}
              </Text>
            )}
          </Section>
        )}

        <Text style={text}>
          In the meantime, feel free to explore the platform or chat with us on
          WhatsApp if your question is urgent.
        </Text>

        <Text style={footer}>
          Warm regards,
          <br />
          The {SITE_NAME} Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We received your message — Intraverse',
  displayName: 'Contact form confirmation',
  previewData: {
    name: 'Adaeze',
    reason: 'API & Integration Support',
    message: 'I would like to learn more about the flights API.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Inter', Arial, sans-serif",
}
const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '32px 24px',
}
const brandBar = {
  height: '4px',
  backgroundColor: '#1E61DC',
  marginBottom: '28px',
}
const h1 = {
  fontSize: '24px',
  fontWeight: 700,
  color: '#0D1B2A',
  margin: '0 0 16px',
}
const text = {
  fontSize: '15px',
  color: '#3a4a5d',
  lineHeight: '1.6',
  margin: '0 0 18px',
}
const summaryBox = {
  backgroundColor: '#F0F5FC',
  borderRadius: '8px',
  padding: '16px 18px',
  margin: '8px 0 22px',
}
const summaryLabel = {
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  color: '#1E61DC',
  fontWeight: 600,
  margin: '0 0 8px',
}
const summaryRow = {
  fontSize: '14px',
  color: '#0D1B2A',
  lineHeight: '1.5',
  margin: '0 0 6px',
}
const footer = {
  fontSize: '14px',
  color: '#0D1B2A',
  margin: '28px 0 0',
}
