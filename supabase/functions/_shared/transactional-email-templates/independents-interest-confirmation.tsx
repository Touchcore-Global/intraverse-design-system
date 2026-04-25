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

interface IndependentsInterestConfirmationProps {
  name?: string
}

const IndependentsInterestConfirmationEmail = ({
  name,
}: IndependentsInterestConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      Welcome to the {SITE_NAME} Independents Programme
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar} />
        <Heading style={h1}>
          {name ? `Thank you, ${name}!` : 'Thank you for your interest!'}
        </Heading>
        <Text style={text}>
          We've received your application for the {SITE_NAME} Independents
          Programme. We're excited that you're considering joining our growing
          community of travel professionals.
        </Text>

        <Section style={stepsBox}>
          <Text style={stepsLabel}>What happens next</Text>
          <Text style={stepRow}>
            <strong>1. Review</strong> — Our Independents team will review your
            submission within 1–2 business days.
          </Text>
          <Text style={stepRow}>
            <strong>2. Onboarding call</strong> — We'll reach out via phone or
            email to walk you through the programme and answer any questions.
          </Text>
          <Text style={stepRow}>
            <strong>3. Get set up</strong> — Once approved, you'll receive your
            credentials and access to the Intraverse tools to start earning.
          </Text>
        </Section>

        <Text style={text}>
          In the meantime, feel free to explore what {SITE_NAME} offers
          independent agents. If anything urgent comes up, you can reach us on
          WhatsApp or reply to this email.
        </Text>

        <Text style={footer}>
          Warm regards,
          <br />
          The {SITE_NAME} Independents Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: IndependentsInterestConfirmationEmail,
  subject: "You're in — Intraverse Independents Programme",
  displayName: 'Independents interest confirmation',
  previewData: {
    name: 'Adaeze',
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
const stepsBox = {
  backgroundColor: '#F0F5FC',
  borderRadius: '8px',
  padding: '16px 18px',
  margin: '8px 0 22px',
}
const stepsLabel = {
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  color: '#1E61DC',
  fontWeight: 600,
  margin: '0 0 10px',
}
const stepRow = {
  fontSize: '14px',
  color: '#0D1B2A',
  lineHeight: '1.6',
  margin: '0 0 10px',
}
const footer = {
  fontSize: '14px',
  color: '#0D1B2A',
  margin: '28px 0 0',
}
