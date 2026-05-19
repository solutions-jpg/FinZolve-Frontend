import { useEffect, type CSSProperties } from 'react'
import { useI18n } from '../../i18n/I18nContext'
import { usePincodeLookup } from '../../hooks/usePincodeLookup'
import { colors } from '../../styles/theme'
import type { LeadFormData, Step2SubStage } from '../../types'
import {
  DOB_REGEX,
  EMAIL_REGEX,
  PAN_REGEX,
  PINCODE_REGEX,
  digitsOnly,
  formatDobInput,
  formatPan,
} from '../../utils/validation'
import { FormField } from './FormField'

interface Step2ProfileProps {
  data: LeadFormData
  subStage: Step2SubStage
  errors: Partial<Record<keyof LeadFormData, string>>
  onChange: (patch: Partial<LeadFormData>) => void
  onSubStageNext: () => void
  onProceedToStep3: () => void
  onBack: () => void
}

const btnPrimary: CSSProperties = {
  flex: 1,
  padding: '14px 20px',
  borderRadius: 10,
  border: 'none',
  background: `linear-gradient(135deg, ${colors.gold}, ${colors.goldLight})`,
  color: colors.navy900,
  fontWeight: 700,
  fontSize: 14,
  cursor: 'pointer',
  fontFamily: 'inherit',
  boxShadow: '0 4px 16px rgba(201,169,98,0.35)',
}

const btnGhost: CSSProperties = {
  padding: '14px 20px',
  borderRadius: 10,
  border: '1.5px solid #e2e8f0',
  background: '#fff',
  color: '#64748b',
  fontWeight: 600,
  fontSize: 14,
  cursor: 'pointer',
  fontFamily: 'inherit',
}

export function Step2Profile({
  data,
  subStage,
  errors,
  onChange,
  onSubStageNext,
  onProceedToStep3,
  onBack,
}: Step2ProfileProps) {
  const { t } = useI18n()
  const f = t.form
  const { loading, error: pincodeError, result } = usePincodeLookup(data.pincode)

  useEffect(() => {
    if (result) onChange({ city: result.city, state: result.state })
    else if (data.pincode.length < 6 && (data.city || data.state)) {
      onChange({ city: '', state: '' })
    }
  }, [result, data.pincode.length, data.city, data.state, onChange])

  const validate2a = () =>
    data.firstName.trim() && data.lastName.trim() && data.gender && EMAIL_REGEX.test(data.email)
  const validate2b = () =>
    PAN_REGEX.test(data.pan) && data.panName.trim() && DOB_REGEX.test(data.panDob)
  const validate2c = () =>
    data.loanAmount.trim() &&
    data.tenureMonths.trim() &&
    PINCODE_REGEX.test(data.pincode) &&
    data.city.trim() &&
    data.state.trim() &&
    !loading

  const actions = (canSubmit: boolean, label: string) => (
    <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
      <button type="button" onClick={onBack} style={btnGhost}>{f.back}</button>
      <button type="submit" disabled={!canSubmit} style={{ ...btnPrimary, opacity: canSubmit ? 1 : 0.4, cursor: canSubmit ? 'pointer' : 'not-allowed' }}>
        {label}
      </button>
    </div>
  )

  const subLabels = { '2a': 'Personal', '2b': 'PAN', '2c': 'Loan & Location' }

  const stageHeader = (
    <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
      {(['2a', '2b', '2c'] as Step2SubStage[]).map((s) => (
        <span
          key={s}
          style={{
            flex: 1,
            padding: '6px 0',
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            background: subStage === s ? colors.navy900 : '#f1f5f9',
            color: subStage === s ? colors.gold : '#94a3b8',
            transition: 'background 0.3s, color 0.3s',
          }}
        >
          {subLabels[s]}
        </span>
      ))}
    </div>
  )

  if (subStage === '2a') {
    return (
      <form
        className="step-slide"
        onSubmit={(e) => { e.preventDefault(); if (validate2a()) onSubStageNext() }}
        noValidate
      >
        {stageHeader}
        <h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 800, color: colors.navy900 }}>{f.step2aTitle}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
          <FormField label={f.firstName} error={errors.firstName} required>
            <input className="fz-input" value={data.firstName} onChange={(e) => onChange({ firstName: e.target.value })} />
          </FormField>
          <FormField label={f.middleName} error={errors.middleName}>
            <input className="fz-input" value={data.middleName} onChange={(e) => onChange({ middleName: e.target.value })} />
          </FormField>
        </div>
        <FormField label={f.lastName} error={errors.lastName} required>
          <input className="fz-input" value={data.lastName} onChange={(e) => onChange({ lastName: e.target.value })} />
        </FormField>
        <fieldset style={{ border: 'none', margin: '0 0 18px', padding: 0 }}>
          <legend style={{ fontSize: 13, fontWeight: 700, color: colors.navy900, marginBottom: 8 }}>{f.gender}</legend>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[{ value: 'male', label: f.genderMale }, { value: 'female', label: f.genderFemale }, { value: 'other', label: f.genderOther }].map((opt) => (
              <label key={opt.value} style={{ cursor: 'pointer' }}>
                <input type="radio" name="gender" className="sr-only" value={opt.value} checked={data.gender === opt.value} onChange={() => onChange({ gender: opt.value })} />
                <span style={{
                  display: 'inline-block', padding: '8px 16px', borderRadius: 999, fontSize: 13, fontWeight: 500,
                  border: `1.5px solid ${data.gender === opt.value ? colors.navy900 : '#e2e8f0'}`,
                  background: data.gender === opt.value ? colors.navy900 : '#fff',
                  color: data.gender === opt.value ? '#fff' : '#475569',
                }}>{opt.label}</span>
              </label>
            ))}
          </div>
          {errors.gender && <span style={{ fontSize: 12, color: '#dc2626' }}>{errors.gender}</span>}
        </fieldset>
        <FormField label={f.email} error={errors.email} required>
          <input type="email" className="fz-input" value={data.email} onChange={(e) => onChange({ email: e.target.value })} />
        </FormField>
        {actions(!!validate2a(), f.next)}
      </form>
    )
  }

  if (subStage === '2b') {
    return (
      <form className="step-slide" onSubmit={(e) => { e.preventDefault(); if (validate2b()) onSubStageNext() }} noValidate>
        {stageHeader}
        <h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 800, color: colors.navy900 }}>{f.step2bTitle}</h3>
        <FormField label={f.pan} error={errors.pan} required>
          <input className="fz-input" style={{ textTransform: 'uppercase' }} value={data.pan} maxLength={10} onChange={(e) => onChange({ pan: formatPan(e.target.value) })} />
        </FormField>
        <FormField label={f.panName} error={errors.panName} required>
          <input className="fz-input" value={data.panName} onChange={(e) => onChange({ panName: e.target.value })} />
        </FormField>
        <FormField label={f.panDob} error={errors.panDob} required>
          <input className="fz-input" placeholder={f.panDobPlaceholder} value={data.panDob} maxLength={10} onChange={(e) => onChange({ panDob: formatDobInput(e.target.value) })} />
        </FormField>
        {actions(!!validate2b(), f.next)}
      </form>
    )
  }

  return (
    <form className="step-slide" onSubmit={(e) => { e.preventDefault(); if (validate2c()) onProceedToStep3() }} noValidate>
      {stageHeader}
      <h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 800, color: colors.navy900 }}>{f.step2cTitle}</h3>
      <FormField label={f.loanAmount} error={errors.loanAmount} required>
        <input className="fz-input" inputMode="numeric" value={data.loanAmount} onChange={(e) => onChange({ loanAmount: digitsOnly(e.target.value, 12) })} />
      </FormField>
      <FormField label={f.tenure} error={errors.tenureMonths} required>
        <input className="fz-input" inputMode="numeric" value={data.tenureMonths} onChange={(e) => onChange({ tenureMonths: digitsOnly(e.target.value, 3) })} />
      </FormField>
      <FormField label={f.pincode} error={errors.pincode} required>
        <div style={{ position: 'relative' }}>
          <input className="fz-input" inputMode="numeric" value={data.pincode} maxLength={6} onChange={(e) => onChange({ pincode: digitsOnly(e.target.value, 6) })} />
          {loading && (
            <span style={{
              position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
              width: 18, height: 18, border: '2px solid #e2e8f0', borderTopColor: colors.gold,
              borderRadius: '50%', animation: 'spin 0.7s linear infinite',
            }} aria-label={f.loadingPincode} />
          )}
        </div>
        {pincodeError && data.pincode.length === 6 && (
          <span style={{ fontSize: 12, color: '#dc2626' }}>{f.pincodeFailed}</span>
        )}
      </FormField>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <FormField label={f.city} error={errors.city}>
          <input className="fz-input" value={data.city} readOnly disabled />
        </FormField>
        <FormField label={f.state} error={errors.state}>
          <input className="fz-input" value={data.state} readOnly disabled />
        </FormField>
      </div>
      {actions(!!validate2c(), f.proceedVerify)}
    </form>
  )
}
