import { useI18n } from '../../i18n/I18nContext'
import { colors } from '../../styles/theme'
import { MOBILE_REGEX, digitsOnly } from '../../utils/validation'
import { LegalLink } from '../legal/LegalLink'
import { FormField } from './FormField'

interface Step1ContactProps {
  mobile: string
  consent: boolean
  mobileError: string
  consentError: string
  onMobileChange: (value: string) => void
  onConsentChange: (checked: boolean) => void
  onNext: () => void
}

export function Step1Contact({
  mobile,
  consent,
  mobileError,
  consentError,
  onMobileChange,
  onConsentChange,
  onNext,
}: Step1ContactProps) {
  const { t } = useI18n()
  const f = t.form
  const canProceed = MOBILE_REGEX.test(mobile) && consent

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (canProceed) onNext()
  }

  return (
    <form className="animate-fade-up" onSubmit={handleSubmit} noValidate>
      <h3 style={{ margin: '0 0 24px', fontSize: 20, fontWeight: 800, color: colors.navy900 }}>
        {f.step1Title}
      </h3>

      <FormField label={f.mobile} error={mobileError} required>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          className="fz-input"
          placeholder={f.mobilePlaceholder}
          value={mobile}
          maxLength={10}
          onChange={(e) => onMobileChange(digitsOnly(e.target.value, 10))}
        />
      </FormField>

      <label
        style={{
          display: 'flex',
          gap: 12,
          alignItems: 'flex-start',
          marginBottom: 24,
          cursor: 'pointer',
          padding: '14px 16px',
          borderRadius: 10,
          border: consent ? `1.5px solid ${colors.gold}` : '1.5px solid #e2e8f0',
          background: consent ? 'rgba(201,169,98,0.06)' : '#f8fafc',
        }}
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          style={{ marginTop: 3, width: 18, height: 18, accentColor: colors.gold, flexShrink: 0 }}
        />
        <span style={{ fontSize: 13, lineHeight: 1.6, color: '#475569' }}>
          {f.consentLead}{' '}
          <LegalLink doc="terms">{f.terms}</LegalLink>{' '}
          {f.consentJoin}{' '}
          <LegalLink doc="privacy">{f.privacy}</LegalLink>
        </span>
      </label>

      {consentError && (
        <p style={{ margin: '-16px 0 16px', fontSize: 12, color: '#dc2626' }} role="alert">
          {consentError}
        </p>
      )}

      <button type="submit" disabled={!consent || !MOBILE_REGEX.test(mobile)} className="btn-luxury" style={{ width: '100%', fontSize: 15 }}>
        {f.next}
      </button>

      {!consent && (
        <p style={{ margin: '10px 0 0', fontSize: 11, color: '#94a3b8', textAlign: 'center' }}>
          {f.consentHint}
        </p>
      )}
    </form>
  )
}
