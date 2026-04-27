/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as contactConfirmation } from './contact-confirmation.tsx'
import { template as contactNotification } from './contact-notification.tsx'
import { template as partnerConfirmation } from './partner-confirmation.tsx'
import { template as partnerNotification } from './partner-notification.tsx'
import { template as independentsInterestConfirmation } from './independents-interest-confirmation.tsx'
import { template as independentsInterestNotification } from './independents-interest-notification.tsx'
import { template as generalApplicationNotification } from './general-application-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-confirmation': contactConfirmation,
  'contact-notification': contactNotification,
  'partner-confirmation': partnerConfirmation,
  'partner-notification': partnerNotification,
  'independents-interest-confirmation': independentsInterestConfirmation,
  'independents-interest-notification': independentsInterestNotification,
  'general-application-notification': generalApplicationNotification,
}
