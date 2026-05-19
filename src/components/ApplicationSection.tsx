import { useI18n } from '../i18n/I18nContext'
import type { LoanSelection } from '../types'
import { colors, shadows } from '../styles/theme'
import { LeadForm } from './lead-form/LeadForm'
import { PurposeSelector } from './lead-form/PurposeSelector'

interface ApplicationSectionProps {
  selection: LoanSelection | null
  onSelect: (selection: LoanSelection) => void
}

export function ApplicationSection({ selection, onSelect }: ApplicationSectionProps) {
  const { t } = useI18n()

  return (
    <section
      id="apply-form"
      style={{
        scrollMarginTop: 96,
        overflowAnchor: 'none',
        background: `linear-gradient(180deg, ${colors.navy950} 0%, ${colors.navy900} 100%)`,
        padding: '64px 20px 80px',
      }}
    >
      <div style={{ maxWidth: 580, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ margin: '0 0 10px', fontSize: 30, fontWeight: 800, color: '#fff' }}>
            {t.application.title}
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: colors.silver, lineHeight: 1.65 }}>
            {t.application.subtitle}
          </p>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '28px 24px 32px',
            boxShadow: shadows.cardHover,
            border: '1px solid rgba(201,169,98,0.2)',
          }}
        >
          <PurposeSelector selection={selection} onSelect={onSelect} />

          {selection ? (
            <LeadForm selection={selection} />
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '20px 12px',
                borderRadius: 12,
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
              }}
            >
              <p style={{ margin: 0, fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>
                ↑ {t.form.purposeWaiting}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
