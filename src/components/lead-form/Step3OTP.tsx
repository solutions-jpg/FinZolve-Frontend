import { useI18n } from '../../i18n/I18nContext'
import { colors } from '../../styles/theme'
import { OTP_REGEX, digitsOnly } from '../../utils/validation'
import { FormField } from './FormField'

interface Step3OTPProps {
  otp: string
  otpError: string
  onOtpChange: (value: string) => void
  onSubmit: () => void
  onBack: () => void
}

export function Step3OTP({ otp, otpError, onOtpChange, onSubmit, onBack }: Step3OTPProps) {
  const { t } = useI18n()
  const f = t.form
  const valid = OTP_REGEX.test(otp)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (valid) onSubmit()
  }

  return (
    <form className="step-slide animate-fade-up" onSubmit={handleSubmit} noValidate>
      <h3 style={{ margin: '0 0 24px', fontSize: 20, fontWeight: 800, color: colors.navy900 }}>
        {f.step3Title}
      </h3>

      <FormField label={f.otp} error={otpError} required>
        <input
          type="text"
          inputMode="numeric"
          className="fz-input"
          style={{ maxWidth: 220, textAlign: 'center', fontSize: 24, letterSpacing: '0.35em', fontWeight: 700 }}
          placeholder={f.otpPlaceholder}
          value={otp}
          maxLength={6}
          onChange={(e) => onOtpChange(digitsOnly(e.target.value, 6))}
        />
      </FormField>

      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button
          type="button"
          onClick={onBack}
          style={{ padding: '14px 20px', borderRadius: 10, border: '1.5px solid #e2e8f0', background: '#fff', color: '#64748b', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}
        >
          {f.back}
        </button>
        <button
          type="submit"
          disabled={!valid}
          className="btn-luxury"
          style={{ flex: 1, fontSize: 14 }}
        >
          {f.submit}
        </button>
      </div>
    </form>
  )
}
